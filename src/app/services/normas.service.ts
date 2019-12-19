import { Injectable } from '@angular/core';

// Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { NormaModel } from '../interface/norma.model';

import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class NormasService {

  normas: Observable<NormaModel[]>;
  normasCollection: AngularFirestoreCollection<NormaModel>;
  
  

  constructor(
    private db: AngularFirestore
    ) {
      this.normasCollection = this.db.collection<NormaModel>('norma');
      this.normas = this.normasCollection.valueChanges();
    }

    private addNorma(nombre: string, deporte: string, criterio: string, minValor: number, coeficiente: number) { 
      const id = this.db.createId();
      const newNorma: NormaModel = {
        nombre,
        deporte,
        criterio,
        minValor,
        coeficiente
  
    };
    this.normasCollection.doc(id).set(newNorma);

  }
}
