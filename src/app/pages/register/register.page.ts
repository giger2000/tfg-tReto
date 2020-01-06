import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';

import { AuthService } from './../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController} from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

import { Router} from '@angular/router';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormGroup;
  username: string = '';
  password: string = '';
  cpassword: string = '';
  firstName: string = '';
  lastName: string = '';
  stravaUID: string = '';


  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private navCtrl: NavController,
    public afAuth: AngularFireAuth,
    public afstore: AngularFirestore,
    public user: UserService,
    public alertController: AlertController,
    public router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
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

  async register() {
    const value = this.form.value;
    const username = value.email;
    const password = value.password;
    const cpassword = value.cpassword;
    const firstName = value.firstName;
    const lastName = value.lastName;
    const stravaUID = value.stravaUID;

    // Comprobar que los password se hayan escrito igual

    if (password !== cpassword) {
      // return console.log('Password no coincide');
      return this.presentAlert('Error', 'Las contraseñas no coinciden');
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword( username, password);
      // console.log('Resultado del registro', res);
      // DAR DE ALTA LOS DATOS EN FIREBASE
      // CREAMOS UN DOCUMENTO DENTRO DE LA COLECCIÓN USER
      this.afstore.doc(`users/${res.user.uid}`).set({
        username,
        firstName,
        lastName,
        stravaUID

      });


      // Añadimos los datos del usuario
      this.user.setUser({
        username,
        firstName,
        lastName,
        stravaUID,
        uid: res.user.uid
      });

      // MENSAJE DE ALERTA
      this.presentAlert('Correcto', 'Bienvenido!.El registro se realizó correctamente');
      //this.router.navigate(['/tabs']);
      this.router.navigate(['/home']);
    } catch (err) {
      console.log('Error de registro', err);
      if (err.code === 'auth/email-already-in-use')
      this.presentAlert('Error', 'Este usuario ya existe');
    }
  }

  private buildForm() {

    // Los únicos campos obligatorios son email y password
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      stravaUID: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
    });
  }

  // 



}