import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

// Firestore

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,
        AngularFirestoreDocument,
        AngularFirestoreCollectionGroup
      } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})


export class ActivityService {
 

  constructor( private http: HttpClient,
              // private router: Router,
               private afAuth: AngularFireAuth,
               private afs: AngularFirestore) {

                // leer docs user


}


  // Recupera los datos de un JSON local

  getData() {
    return this.http.get('assets/data/activities.json');

  }



  

  // getActivitiesCollection() {
  //   // Leer todas las actividades del user conectado
  //   const actividadesUsuario = this.afs.collection('users')
  //                           .doc(`${this.afAuth.auth.currentUser.uid}`)  // recibimos UID del user actual
  //                           .collection('activities')
  //                           .get()
  //                           .subscribe((querySnapshot) => {
  //                               querySnapshot.forEach((doc) => {
  //                               });

  //                               var totalActividades = querySnapshot.docs.length;
                                
  //                           });
  //   return actividadesUsuario;
  // }

  getCalcularTotales(actividad){
    return actividad.subscribe(data => {
      const actividadesTotal = data.length;
      console.log('nuevo total ', actividadesTotal);
    });
  }

}
