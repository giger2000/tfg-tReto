import { Injectable } from '@angular/core';

// Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// import { map } from 'rxjs/operators';
import { NormaModel } from '../interface/norma.model';



import { HttpClient} from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class NormasService {

  // Formulario
  // forma: FormGroup;

  normas: Observable<NormaModel[]>;
  normasCollection: AngularFirestoreCollection<NormaModel>;

  constructor(
    private db: AngularFirestore,
    private http: HttpClient
    ) {
 
     }

  getNormas() {
    console.log('entramos en getnormas service');

    this.normasCollection = this.db.collection<NormaModel>('norma');
    // this.normas = this.normasCollection.valueChanges();
    // return this.normas;
    return this.normasCollection.snapshotChanges();

  }


  // updateNorma(data) {
  //   return this.db
  //     .collection("norma")
  //     .doc(data.payload.doc.id)
  //     .set({ completed: true }, { merge: true });
  // }

  // deleteCoffeeOrder(data) {
  //   return this.firestore
  //     .collection("coffeeOrders")
  //     .doc(data.payload.doc.id)
  //     .delete();
  // }

  crearNorma(norma: NormaModel) {
    return new Promise<any>((resolve, reject) => {
      this.db
        .collection('norma')
        .add(norma)
        .then(res => {
          console.log('Norma almacenada', res);
          return;
          // console.log('Formulario', this.forma);
          // this.normas.toPromiseresetForm();
        }, err => reject(err));
    });
  }

  



  // getNorma(): Observable<any> {
  //   return new Observable((observer) => {
  //     this.ref.onSnapshot((querySnapshot) => {
  //       let normas = [];
  //       querySnapshot.forEach((doc) => {
  //         let data = doc.data();
  //         boards.push({
  //           key: doc.id,
  //           title: data.title,
  //           description: data.description,
  //           author: data.author
  //         });
  //       });
  //       observer.next(boards);
  //     });
  //   });


  // }


//   createCoffeeOrder(data) {
//     return new Promise<any>((resolve, reject) => {
//         this.db
//             .collection("norma")
//             .add(data)
//             .then(res => {}, err => reject(err));
//     });
// }

}
