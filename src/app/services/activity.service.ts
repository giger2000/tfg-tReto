import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Actividad } from './../interface/actividad';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})



export class ActivityService {

  actividades: Observable<Actividad[]>;
  private actividadCollection: AngularFirestoreCollection<Actividad>;
  private itemDoc: AngularFirestoreDocument<Actividad>;

  constructor( private http: HttpClient,
               private afs: AngularFirestore) { 

  // Recuperar datos del Firestore
   // todos los cambios en la colección, se guardarán en normas
   this.actividadCollection = afs.collection<Actividad>('activities');
   this.actividades = this.actividadCollection.valueChanges();
   // Con snapshot tenemos el ID, básico para el crud
   this.actividades = this.actividadCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => {
         const data = a.payload.doc.data() as Actividad;
         const id = a.payload.doc.id;
         return { id, ...data };
       }))
     );

  }

  // Recupera los datos de un JSON local

  getData() {
    return this.http.get('assets/data/activities.json');

  }


  getActivity(activityID: string) {

    // return this._httpClient.get(API + '/id/' + activityID);

  }
  getAllActivities() {
    // return this._httpClient.get(API);
  }

  crearActividad( activity: Actividad){

    // return this.activity;

    this.actividadCollection.add(activity);
    // return this.http.post(

  }

  listaActividad() {
    return this.actividades;
  }
}
