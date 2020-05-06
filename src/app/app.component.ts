import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {

    //Se nao tem token
    if( localStorage.getItem('token') === null ) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/tabs/home']);
    }

    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#08b8f0');
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }
}
