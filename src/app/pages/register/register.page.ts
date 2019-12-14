import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private navCtrl: NavController
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  doRegister() {
    console.log(this.form.value);
    const value = this.form.value;
    this.auth.register(value.email, value.password)
    .then((rta) => {
      this.navCtrl.navigateRoot('schedule');
    })
    .catch(error => {
      console.log(error);
    });
  }

  private buildForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

}