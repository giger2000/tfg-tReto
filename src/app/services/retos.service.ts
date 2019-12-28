import { Injectable } from '@angular/core';

// Firebase
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RetoModel } from '../interface/reto.model';

@Injectable({
  providedIn: 'root'
})
export class RetosService {

  retos: Observable<RetoModel[]>;
  private retosCollection: AngularFirestoreCollection<RetoModel>;
  private itemDoc: AngularFirestoreDocument<RetoModel>;

  constructor(
    private db: AngularFirestore
  ) {
     // todos los cambios en la colección, se guardarán en normas
     this.retosCollection = db.collection<RetoModel>('retos');
     // Con snapshot tenemos el ID, básico para el crud
     this.retos = this.retosCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => {
         const data = a.payload.doc.data() as RetoModel;
         const id = a.payload.doc.id;
         return { id, ...data };
       }))
     );
  }
  listaReto() {
    return this.retos;
  }
  
  agregarReto(reto: RetoModel) {
    this.retosCollection.add(reto);
  }
  
  eliminarReto(reto)  {
  this.itemDoc = this.db.doc<RetoModel>(`reto/${reto.id}`);
  this.itemDoc.delete();
  }
  
  editarReto(reto)  {
    this.itemDoc = this.db.doc<RetoModel>(`reto/${reto.id}`);
    this.itemDoc.update(reto);
    }
}




