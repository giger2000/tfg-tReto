import { Component, OnInit } from '@angular/core';
// Firebase
// import { AngularFirestore } from '@angular/fire/firestore';
// import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  // userPosts;
  // public userData: Observable<firebase.User>;


  constructor(
              // private afs: AngularFirestore,
              // private user: UserService,
              public auth: AuthService
               ) {
                // const posts = afs.doc(`users/${user.getUID()}`);
                // this.userPosts = posts.valueChanges();
                // console.log('UID de usuario ', posts);
                // this.mainuser = afs.doc(`users/${user.getUID()}`)
                // const usuarioActual = this.afs.doc(`users/${this.user.getUID()}`);
              
                // this.userData = auth.userData;
              }

     // NUEVO
  

  ngOnInit() {
    console.log(this.auth.user$);

  }

}
