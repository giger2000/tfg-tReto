import { Component, OnInit } from '@angular/core';

import { NormaModel } from './../../interface/norma.model';
// import { NormasService } from 'src/app/services/normas.service';

// Formulario
import { NgForm } from '@angular/forms';


import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// FontAwesome
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-norma',
  templateUrl: './norma.page.html',
  styleUrls: ['./norma.page.scss'],
})
export class NormaPage implements OnInit {
  
  // norma: any = [];
  norma: NormaModel[] = [];


// icono muestra
  // public faCoffee = faCoffee;

    //para insertar tarea necesitamos instancia

    normasCollection: AngularFirestoreCollection<NormaModel>;
    $normas: Observable<NormaModel[]>; // porque el array varía en tiempo real

// private normaService: NormasService,
  constructor( 
              private db: AngularFirestore) { 

                this.normasCollection = this.db.collection<NormaModel>('norma');
                this.$normas = this.normasCollection.valueChanges();

              }

  ngOnInit() {

  }

   guardar( formNorma: NgForm)  {

    // console.log('Datos formulario', formNorma.value);

    if ( formNorma.invalid) {
      console.log('Formulario no es válido');
      return;
    }

    const objForm = formNorma.value; //objeto con todo el formulario

    // console.log("nombre del formulario ", objForm.nombre);

     const id = this.db.createId();
    //  console.log("coleccion",this.normasCollection);
     this.normasCollection.doc(id).set(objForm);
   }

  }




