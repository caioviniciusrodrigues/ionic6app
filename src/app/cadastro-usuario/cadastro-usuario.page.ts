import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {

  form: FormGroup;
  usuario: Usuario;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      nome: [null, Validators.compose([Validators.required])],
      login: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required])],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.usuarioService.save(this.form.value).subscribe(
        response => {
          this.tostMessage('Registro salvo', 'success');
          this.back();
        },
        error => {
          this.tostMessage('Ocorreu falha', 'danger');
          console.log(error);
      });
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


  back() {
    this.router.navigate(['/']);
  }

}
