import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';

import { AuthService } from './../../services/auth.service';
// import { FcmService } from './../../services/fcm.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private menuCtrl: MenuController,
    private auth: AuthService,
    private navCtrl: NavController
    // private fcm: FcmService
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  async doLogin() {
    console.log(this.form.value);
    const value = this.form.value;
    this.auth.login(value.email, value.password)
    .then ((rta) => {
      //redirect
    })
    .catch(error =>{
      console.log (error);
    });
    // await this.fcm.getToken(rta.user.email);
    // this.navCtrl.navigateForward('schedule');
  }

  goToRegisterPage() {
    this.navCtrl.navigateForward('register');
  }

  private buildForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

}