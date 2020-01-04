import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';

import { AuthService } from './../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController} from '@ionic/angular';

import { Router} from '@angular/router';

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
    public alertController: AlertController,
    public router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
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
      return this.showAlert('Error', 'Las contraseñas no coinciden');
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword( username, password);
      console.log('Resultado del registro', res);
      this.showAlert('Correcto', 'Bienvenido!.El registro se realizó correctamente');
      // this.router.navigate(['/tab']);
      this.router.navigate(['/home']);
    } catch (err) {
      console.log('Error de registro', err);
      this.showAlert('Error', 'Fallo en el registro');
    }
    // console.log(this.form.value);
    // this.auth.register( value.email, value.password)
    // .then((rta) => {

    //   // Redirección una vez registrado
    //   this.navCtrl.navigateRoot('home');
    // })
    // .catch(error => {
    //   console.log(error);
    // });
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

  // Mostrar alertas

  async showAlert(header: string, message: string) {

    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }



}