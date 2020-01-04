import { Component, OnInit } from '@angular/core';

// Formularios
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

// Para controlar la aparición del menu sólo si estás logeado
import { MenuController, NavController } from '@ionic/angular';

import { AuthService } from './../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { RegisterPage} from '../register/register.page';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  username: string = '';
  password: string = '';

  constructor(
    public afAuth: AngularFireAuth,
    private fb: FormBuilder,
    private menuCtrl: MenuController,
    private auth: AuthService,
    private navCtrl: NavController
    // private fcm: FcmService
  ) {
    this.buildForm();
  }

  ngOnInit() {
    // this.menuCtrl.enable(false);
  }

  async doLogin() {
    console.log(this.form.value);
    const value = this.form.value;
    // nuevo
    // const { username, password} = this;
    const username = value.email;
    const password = value.password;

    try {
     const res = await this.afAuth.auth.signInWithEmailAndPassword( username, password); // eliminar gmail final
    } catch (err) {
      console.dir(err);
      if (err.code === 'auth/user-not-found') {
        console.log ('Ussuario no encontrado'); // TODO poner alert controller
      }
    }

    // this.auth.login(value.email, value.password)
    // .then ((rta) => {
    //   // redirect a la página principal
    //   this.navCtrl.navigateForward('home');
    // })
    // .catch(error => {
    //   console.log (error);
    // });
    // // await this.fcm.getToken(rta.user.email);
    // this.navCtrl.navigateForward('home');
  }

  // goToRegisterPage() {
  //   this.navCtrl.navigateForward('register');
  // }

  private buildForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  goRegisterPage() {
    this.navCtrl.navigateForward('register');
    // this.navCtrl.push(RegisterPage);
  }

}