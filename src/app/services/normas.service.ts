import { Injectable } from '@angular/core';

// Firebase
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { NormaModel } from '../interface/norma.model';



@Injectable({
  providedIn: 'root'
})
export class NormasService {

  // Formulario
  // forma: FormGroup; 

  normas: Observable<NormaModel[]>;
  private normasCollection: AngularFirestoreCollection<NormaModel>;
  private itemDoc: AngularFirestoreDocument<NormaModel>;

  constructor(
    private db: AngularFirestore
    ) {
    // todos los cambios en la colección, se guardarán en normas
    this.normasCollection = db.collection<NormaModel>('norma');
    // Con snapshot tenemos el ID, básico para el crud
    this.normas = this.normasCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as NormaModel;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
     }

listaNorma() {
  return this.normas;
}

agregarNorma(norma: NormaModel) {
  this.normasCollection.add(norma);
}

eliminarNorma(norma)  {
this.itemDoc = this.db.doc<NormaModel>(`norma/${norma.id}`);
this.itemDoc.delete();
}

editarNorma(norma)  {
  this.itemDoc = this.db.doc<NormaModel>(`norma/${norma.id}`);
  this.itemDoc.update(norma);
  }

}
