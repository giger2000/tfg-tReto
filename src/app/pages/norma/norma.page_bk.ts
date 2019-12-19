import { Component, OnInit } from '@angular/core';

import { NormaModel } from './../../interface/norma.model';
import { NgForm } from '@angular/forms';
import { NormasService } from 'src/app/services/normas.service';

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
  norma: any;
  normas: Observable<NormaModel[]>;
  normasCollection: AngularFirestoreCollection<NormaModel>;

// icono muestra
  // public faCoffee = faCoffee;



  constructor( private normaService: NormasService,
              private db: AngularFirestore) { }

  ngOnInit() {

    this.normasCollection = this.db.collection<NormaModel>('norma');
    this.normas = this.normasCollection.valueChanges();

    //para insertar tarea necesitamos instancia

    // normasCollection: AngularFirestoreCollection<NormaModel>;
    // $normas: Observable<NormaModel[]>; // porque el array varía en tiempo real

  }

  //  guardar( form: NgForm)  {

  //   const id = this.db.createId();
  //   const norma: NormaModel = { id, nombre, 
  //                               deporte, 
  //                               criterio, 
  //                               minValor, 
  //                               coeficiente };
  //   this.normasCollection.doc(id).set(norma);
  //   // if ( form.invalid) {
  //   //   console.log('Formulario no es válido');
  //   //   return;
  //   // }
  //  }  

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
    // this.normasCollection.add(newNorma);

    // console.log('la norma es: ',this.norma);
    //    this.normaService.crearNorma(this.norma.nombre, );
  } 
  
  }




