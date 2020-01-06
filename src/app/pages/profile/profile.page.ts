import { Component, OnInit } from '@angular/core';
// Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
import { ActivityService } from './../../services/activity.service';
import { AngularFireAuth } from '@angular/fire/auth';
// import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';
import { UserModel } from 'src/app/interface/user.model';
import { Actividad } from 'src/app/interface/actividad';


// import { map } from 'rxjs/operators';

// Ionic loading
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {



  userRef: AngularFirestoreCollection<UserModel>;
  activityRef: AngularFirestoreCollection<Actividad>;
  user$: Observable<UserModel[]>;
  actividad$: Observable<Actividad[]>;

  actividadesTotal;

  cargando = false;

  constructor(
              private afs: AngularFirestore,
              public loadingController: LoadingController,
              private act: ActivityService,
              public auth: AuthService,
              public user: UserService,
              private afAuth: AngularFireAuth
               ) {

                this.cargando = true;

                this.userRef = this.afs.collection('users');
                this.user$ = this.userRef.valueChanges();

                this.activityRef = this.afs.collection('users')
                                  .doc(`${this.afAuth.auth.currentUser.uid}`)
                                  .collection('activities');
                this.actividad$ = this.activityRef.valueChanges();
                
              }
             


  ngOnInit() {
    
     const actividadesTotal = this.getTotalActividades();
     console.log('Total : ',  actividadesTotal);
  }

  getTotalActividades() {
   
    return this.activityRef.get.length;
    
   
  }






}
