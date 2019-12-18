import { Injectable } from '@angular/core';

// Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NormaModel } from '../interface/norma.model';


@Injectable({
  providedIn: 'root'
})
export class NormasService {

  $normas: Observable<NormaModel[]>; // porque el array varía en tiempo real
  normasCollection: AngularFirestoreCollection<NormaModel>;

  constructor(
    private db: AngularFirestore
    ) { }

  getNormas(): Observable<any> {
        // Trabajamos con Observable porque trabajamos en tiempo real
    this.normasCollection = this.db.collection('norma');
    this.$normas = this.normasCollection.valueChanges();

    // Muesta la info de la consulta
    const info = this.normasCollection.valueChanges()
                .subscribe( resp => {
                  console.log('respuesta: ', resp[0]);
                });

    return this.$normas;

  }

  // crearNorma( id: string, nombre: string, deporte: string, criterio: string,  minValor: number, coeficiente: number ) {
    crearNorma( $normas) {

    this.normasCollection = this.db.collection('norma');
    this.$normas = this.normasCollection.valueChanges()
                    .pipe (
                      map( (resp: NormaModel[]) => resp.map( ({nombre, deporte, minValor, criterio, coeficiente})  => ({nombre, deporte, minValor, criterio, coeficiente}) ))
                    )
                    // .subscribe( resp => {
                    //   console.log ('convierte ', resp);
                    // });

        //  nombre: tempNorma.nombre,
        //                     deporte: tempNorma.deporte,
        //                       criterio: tempNorma.criterio,
        //                       minValor: tempNorma.minValor,
        //                       coeficiente: tempNorma.coeficiente,

        //                   }
        //                 })
        //               })
        //             );

    console.log('recibe ', $normas);


    console.log('convierte ', $normas);


    // const newNorma =  {

    //   nombre: tempNorma.nombre,
    //     deporte: tempNorma.deporte,
    //     criterio: tempNorma.criterio,
    //     minValor: tempNorma.minValor,
    //     coeficiente: tempNorma.coeficiente,

    //   // nombre: 'albero',
    //   // deporte: 'btt',
    //   // criterio: 'desnivel',
    //   // minValor: 23,
    //   // coeficiente: 2.3,
    // };
    this.normasCollection.add($normas);

    // this.normasCollection.add(norma);
  }
}
