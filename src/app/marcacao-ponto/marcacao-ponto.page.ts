import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins, CameraResultType, CameraSource, CameraDirection, Geolocation, GeolocationPosition } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MarcacaoPontoService } from './marcacao-ponto.service';
import { ToastController } from '@ionic/angular';
import { Ponto } from './ponto';

@Component({
  selector: 'app-marcacao-ponto',
  templateUrl: './marcacao-ponto.page.html',
  styleUrls: ['./marcacao-ponto.page.scss'],
})
export class MarcacaoPontoPage implements OnInit {

  photoJson: string;

  location: GeolocationPosition;

  constructor(
    private router: Router, 
    private sanitizer: DomSanitizer,
    private marcacaoPontoService: MarcacaoPontoService,
    public toastController: ToastController,
    ) { }

  photo: SafeResourceUrl;

  capturouFoto: boolean = false;

  today = Date.now();

  ngOnInit() {
    this.getCurrentPosition();
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.location = coordinates;
  }

  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 50,
      height: 100,
      width: 100,
      direction: CameraDirection.Front,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.capturouFoto = true;
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));

    this.photoJson = image.dataUrl.substring(image.dataUrl.indexOf(',') + 1 );
  }


  registerPonto() {
    const ponto: Ponto = {
      usuario : localStorage.getItem('usuario.codigo'),
      nome : localStorage.getItem('usuario.nome'),
      login : localStorage.getItem('usuario.login'),
      datahora : '2019-06-11T09:45:32.000-0300',
      timezone : '3',
      foto : this.photoJson,
      latitude : this.location.coords.latitude,
      longitude : this.location.coords.longitude,
      localizacao : '',
      macaddress : '127.0.0.1',
      appversion : '1.0.0.0',
      mockLatitude : '0.00',
      mockLongitude : '0.00',
      cid : '0.00',
      lac : '0.00',
      mcc : '0.00',
      mnc : '0.00'
    };

    this.marcacaoPontoService.registrarPonto(ponto).subscribe(
      (response) => {
        this.tostMessage('Ponto Registrado', 'success');
      },
      (error) => {
        this.tostMessage('Falha ao registrar ponto', 'danger');
      }
    );

  }

  async tostMessage(mensagem, tipo) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 3000,
      color: tipo,
      position: 'top'
    });
    toast.present();
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
