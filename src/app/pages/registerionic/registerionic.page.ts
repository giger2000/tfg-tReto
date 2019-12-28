import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'

import { AngularFirestore } from '@angular/fire/firestore';
// import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerionic',
  templateUrl: './registerionic.page.html',
  styleUrls: ['./registerionic.page.scss'],
})
export class RegisterionicPage implements OnInit {

  username: string = ""
	password: string = ""
	cpassword: string = ""

	constructor(
		public afAuth: AngularFireAuth,
		public afstore: AngularFirestore,
		// public user: UserService,
		public alertController: AlertController,
		public router: Router
		) { }

	ngOnInit() {
	}

	async presentAlert(title: string, content: string) {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		})

		await alert.present();
  }
  

	async register() {
		const { username, password, cpassword } = this;
		if(password !== cpassword) {
      this.presentAlert('Error', 'Las contraseñas no coinciden');
			// return console.error("Passwords don't match");
		}

		try {
			const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@gmail.com', password)
      this.presentAlert('Correcto', 'Bienvenido. Ya estás registrado');
			// this.afstore.doc(`users/${res.user.uid}`).set({
			// 	username
			// })

			// this.user.setUser({
			// 	username,
			// 	uid: res.user.uid
			// })

		
			this.router.navigate(['/home']);

		} catch (error) {
      console.dir(error);
      if (error.code = 'auth/email-already-in-use'){
        this.presentAlert('Error', 'Este usuario ya existe');
      }else{
        this.presentAlert('Error', error.message);
      }
   
		}
	}

}

