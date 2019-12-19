import { Injectable } from '@angular/core';

// Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { NormaModel } from '../interface/norma.model';



@Injectable({
  providedIn: 'root'
})
export class NormasService {

  normas: Observable<NormaModel[]>;
  normasCollection: AngularFirestoreCollection<NormaModel>;

  constructor(
    private db: AngularFirestore
    ) {
      // this.normasCollection = this.db.collection<NormaModel>('norma');
      // this.normas = this.normasCollection.valueChanges();
    }

  //   private addNorma(nombre: string, deporte: string, criterio: string, minValor: number, coeficiente: number) { 
  //     const id = this.db.createId();
  //     const newNorma: NormaModel = {
  //       nombre,
  //       deporte,
  //       criterio,
  //       minValor,
  //       coeficiente
  //  };
  //   this.normasCollection.doc(id).set(newNorma);

  // }

  getNormas() {

    // var docRef = this.db.collection<NormaModel>('norma').doc('nr1');

    // docRef.get().then(function(doc) {
    //     if (doc.exists) {
    //         console.log("Document data:", doc.data());
    //         return doc;
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //     }
    // }).catch(function(error) {
    //     console.log("Error getting document:", error);
    // });

    this.normasCollection = this.db.collection<NormaModel>('norma');
    this.normas = this.normasCollection.valueChanges();
    return this.normas;
  }
}
