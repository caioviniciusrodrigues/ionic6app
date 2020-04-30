import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-marcacao-ponto',
  templateUrl: './marcacao-ponto.page.html',
  styleUrls: ['./marcacao-ponto.page.scss'],
})
export class MarcacaoPontoPage implements OnInit {

  constructor(private router: Router, private camera: Camera) { }

  today = Date.now();

  ngOnInit() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
  }
  

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario.codigo');
    localStorage.removeItem('usuario.nome');
    localStorage.removeItem('usuario.login');
    localStorage.removeItem('usuario.logado');
    this.router.navigate(['/']);
  }


}
