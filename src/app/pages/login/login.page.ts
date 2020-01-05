import { Component, OnInit } from '@angular/core';

// Formularios
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

// Para controlar la aparición del menu sólo si estás logeado
import { MenuController, NavController } from '@ionic/angular';

import { AuthService } from './../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { RegisterPage} from '../register/register.page';
import { UserService } from './../../services/user.service';

import { AlertController} from '@ionic/angular';


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
    private navCtrl: NavController,
    public user: UserService,
    public router: Router,
    public alertController: AlertController,
    
  ) {
    this.buildForm();
  }

  ngOnInit() {
    // this.menuCtrl.enable(false);
  }

  // VENTANA DE ALERTA
  async presentAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    });
    await alert.present();
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

     // Almacenar datos usuario en Firebase
     if (res.user) {
      this.user.setUser({
        username,
        uid: res.user.uid
      });
      this.router.navigate(['/home']);
      // this.router.navigate(['/tabs']);
    }
    } catch (err) {
      console.dir(err);
      if (err.code === 'auth/user-not-found') {
        console.log ('Usuario no encontrado');
        this.presentAlert('Error', 'Usuario no registrado'); // TODO poner alert controller
      }
    }

  }

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
