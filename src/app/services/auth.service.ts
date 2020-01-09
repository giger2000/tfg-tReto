import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, 
        AngularFirestoreDocument ,
        AngularFirestoreCollectionGroup
      } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


import {UserModel} from './../interface/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  user$: Observable<UserModel>;
  constructor(
              private router: Router,
              public userS: UserService,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore
              // private afcg: AngularFirestoreCollectionGroup

              ) {
                this.user$ = this.afAuth.authState.pipe(
                  switchMap( user => {
                    if (user) {
                      return this.afs.doc<UserModel>(`users/${user.uid}`).valueChanges();
                    } else {
                      return of (null);
                    }
                  })
                );
                // const usersRef = afs.doc(`users/${userS.getUID()}`);

              }


  async canActivate(route) {
    if (await this.userS.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }


   logout() {
    return this.afAuth.auth.signOut();

  }

  private updateUserData({uid, correoE, username, firstName, lastName, stravaUID, photoURL}: UserModel) {
    const userRef: AngularFirestoreDocument<UserModel> = this.afs.doc(`users/${uid}`);

    const data: UserModel = {
      uid,
      correoE,
      username,
      firstName,
      lastName,
      stravaUID,
      photoURL


    }
    return userRef.set(data, {merge: true});
  }
}
