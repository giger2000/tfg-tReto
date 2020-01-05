import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(
              private router: Router,
              private user: UserService,
              private afAuth: AngularFireAuth) {}

  async canActivate(route) {
    if (await this.user.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  // para borrar
   logout() {
    
    return this.afAuth.auth.signOut();
    // this.router.navigate(['/login']);
    
    // return false;
  }
}
