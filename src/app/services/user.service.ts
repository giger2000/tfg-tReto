import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { auth } from 'firebase/app';

interface User {
  username: string,
  firstName?: string,
  lastName?: string,
  stravaUID?: string,
  correoE?: string,
  uid: string,
  photoURL?: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;

  constructor(private afAuth: AngularFireAuth) { }

  setUser(user: User) {
    this.user = user;
  }

  // getUsername(): string {
  //   return this.user.username;
  // }

  // reAuth(username: string, password: string) {
  //   return this.afAuth.auth.currentUser.reauthenticateWithCredential(auth.EmailAuthProvider.credential(username + '@gmail.com', password));
  // }

  // updatePassword(newpassword: string) {
  //   return this.afAuth.auth.currentUser.updatePassword(newpassword);
  // }

  // updateEmail(newemail: string) {
  //   return this.afAuth.auth.currentUser.updateEmail(newemail + '@gmail.com');
  // }

  async isAuthenticated() {
    if (this.user) return true;

    const user = await this.afAuth.authState.pipe(first()).toPromise(); // Tenemos el primer usuario registrado

    if (user) {
      this.setUser({
      username: user.email.split('@')[0], // tenemos el nombre de usuario para identificarlo en nuestro sistema
      uid: user.uid
    });

      return true;
    }
    return false;
  }

  getUID(): string {
    if (!this.user) {
      if (this.afAuth.auth.currentUser) {
        const user = this.afAuth.auth.currentUser;
        this.setUser({
          username: user.email.split('@')[0],
          uid: user.uid // Obtenemos el nombre de usuario registrado
        });
        return user.uid;
      } else {
          throw new Error('Usuario no conectado');
      }
    } else {
        return this.user.uid;
    }
  }
}
