import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins, CameraResultType, CameraSource, CameraDirection, Geolocation, GeolocationPosition } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MarcacaoPontoService } from './marcacao-ponto.service';
import { ToastController } from '@ionic/angular';
import { Ponto } from './ponto';
import { Clock } from './clock.model';
import { ClockService } from './clock.service';

@Component({
  selector: 'app-marcacao-ponto',
  templateUrl: './marcacao-ponto.page.html',
  styleUrls: ['./marcacao-ponto.page.scss'],
})
export class MarcacaoPontoPage implements OnInit {

  photoJson: string;

  hora: string;

  location: GeolocationPosition;

  photo: SafeResourceUrl;

  mostraFoto: boolean = false;

  today = Date.now();

  clock: Clock;

  constructor(
    private router: Router, 
    private sanitizer: DomSanitizer,
    private marcacaoPontoService: MarcacaoPontoService,
    private toastController: ToastController,
    clockService: ClockService
    ) {
      clockService.GenerateTimeNow(1000, clock => this.clock = clock);
    }

  ngOnInit() {
    this.getCurrentPosition();
  }

  ionViewDidEnter() {
    this.router.navigate(['/tabs/marcacao-ponto']);
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.location = coordinates;
  }


  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 60,
      height: 400,
      width: 300,
      direction: CameraDirection.Front,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.mostraFoto = true;
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));

    this.photoJson = image.dataUrl.substring(image.dataUrl.indexOf(',') + 1 );
  }


  registraPonto() {

    var dataHora = new Date();

    const ponto: Ponto = {
      usuario : localStorage.getItem('usuario.codigo'),
      nome : localStorage.getItem('usuario.nome'),
      login : localStorage.getItem('usuario.login'),
      datahora : dataHora.toISOString(),
      timezone : new String(dataHora.getTimezoneOffset() * -1).toString(),
      foto : this.photoJson,
      latitude : new String(this.location.coords.latitude).toString(),
      longitude : new String(this.location.coords.longitude).toString(),
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

//    console.log(ponto);

    this.marcacaoPontoService.registrarPonto(ponto).subscribe(
      (response) => {
        this.tostMessage('Ponto Registrado', 'success');
        setTimeout(() => {
            this.mostraFoto = false;
        }, 3000);
      },
      (error) => {
        this.tostMessage('Falha ao registrar ponto', 'danger');
      }
    );

  }

  async tostMessage(mensagem, tipo) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
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
