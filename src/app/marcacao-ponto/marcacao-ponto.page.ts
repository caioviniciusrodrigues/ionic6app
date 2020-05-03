import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-marcacao-ponto',
  templateUrl: './marcacao-ponto.page.html',
  styleUrls: ['./marcacao-ponto.page.scss'],
})
export class MarcacaoPontoPage implements OnInit {

  constructor(private router: Router, private sanitizer: DomSanitizer) { }

  photo: SafeResourceUrl;

  capturouFoto: boolean = false;

  today = Date.now();

  ngOnInit() {

  }

  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.capturouFoto = true;

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
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
