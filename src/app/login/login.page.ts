import { Util } from './../utils/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../cadastro-usuario/usuario';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Plugins } from '@capacitor/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  usuario: Usuario;
  erro = false;
  
   constructor(
    private router: Router,
    private auth: AuthService,
    private toastController: ToastController,
    private formBuilder: FormBuilder,
    ) {

     }

  ngOnInit() {
    this.createForm();
    this.form.controls['login'].setValue(localStorage.getItem('usuario.login'));

    this.bio();
  }

  
  async bio() {
    const { BiometricAuth } = Plugins;

    const available = await BiometricAuth.isAvailable()

    if (available.has) {
      const authResult = await BiometricAuth.verify({reason: "Message ..."});
      if (authResult.verified) {
        console.log('Sucesso');
      } else {
        console.log('Falhou');
      }
    } else {
      console.log('Senao nao tem bio');
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
    this.usuario = new Usuario();
    this.usuario.login = this.form.get('login').value;
    this.usuario.password = this.form.get('password').value;
    return this.usuario;
  }

  onSubmit() {
    if (this.form.valid) {

        const logout = new Util();
        //logout.logout();

        this.auth.logar(this.createUserLogin()).subscribe(
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
            logout.logout();
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
