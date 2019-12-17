import { Component } from '@angular/core';

import { Platform, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Actividades',
      url: '/activities',
      icon: 'bicycle'
    },
    {
      title: 'Normas',
      url: '/normas',
      icon: 'book'
    },
    {
      title: 'Retos',
      url: '/retos-firebase',
      icon: 'trophy'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    db: AngularFirestore,
    private menuCtrl: MenuController,
    private navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.listenAuthState();
    });
  }

  async logout() {
    await this.auth.logout();
    // Una vez salimos, redirige a la página de login
    this.navCtrl.navigateRoot('login');
  }

  // Observable para controlar si hace falta mostrar o no el menú
  // Lo centralizamos en esta función

  listenAuthState() {
    this.auth.getAuthState()
    .subscribe(session => {
      console.log(session);
      let enable = false;
      if (session !== null) {
        enable = true;
        this.navCtrl.navigateRoot('normas');
      }
      this.menuCtrl.enable(enable);
    });
  }
}
