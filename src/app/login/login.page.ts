import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../cadastro-usuario/usuario';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

import { FingerPrintAuth } from 'capacitor-fingerprint-auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  usuario: Usuario;
  erro = false;

  authBio: FingerPrintAuth;

  constructor(
    private router: Router, 
    private auth: AuthService,
    private toastController: ToastController,
    private formBuilder: FormBuilder
    ) {
      this.authBio = new FingerPrintAuth();
     }

  ngOnInit() {
    this.createForm();
  }

  async isAvailable() {
    await this.authBio.available();
  }

  async verify() {
    try {
      await this.authBio.verify();
    } catch (e) {
      console.log(e);
    }
  }
  async verifyWithFallback() {
    try {
      this.authBio.verifyWithFallback();
    } catch (error) {
      console.log(error);
    }
  }

  createForm() {
    this.form = this.formBuilder.group({
      login: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required])],
    });
  }

  navTabs() {
    this.router.navigateByUrl('/tabs(tabs:tabDisponiveis)');
  }

  back() {
    this.router.navigate(['/']);
  }

  private createUserLogin() {
    this.usuario.login = this.form.get('login').value;
    this.usuario.password = this.form.get('password').value;
    return this.usuario;
  }

  onSubmit() {
    if (this.form.valid) {

        localStorage.removeItem('token');
        localStorage.removeItem('usuario.codigo');
        localStorage.removeItem('usuario.nome');
        localStorage.removeItem('usuario.login');
        localStorage.removeItem('usuario.logado');

        this.auth.logar(this.form.value).subscribe(
          response => {
            localStorage.setItem('token', response['token']);
            localStorage.setItem('usuario.codigo', response['usuario']['codigo']);
            localStorage.setItem('usuario.nome', response['usuario']['nome']);
            localStorage.setItem('usuario.login', response['usuario']['login']);
            localStorage.setItem('usuario.logado', 'sim');
            this.navTabs();
          },
          error => {
            this.erro = true;
            localStorage.removeItem('token');
            localStorage.removeItem('usuario.codigo');
            localStorage.removeItem('usuario.nome');
            localStorage.removeItem('usuario.login');
            localStorage.removeItem('usuario.logado');
            this.form.reset();
          }
        );

    }
  }

  async tostMessage(mensagem, tipo) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 3000,
      color: tipo
    });
    toast.present();
  }


}
