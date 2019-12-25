import { Component } from '@angular/core';
// import { FormGroup, FormControl, Validators} from '@angular/forms';

// ionic select
import { Platform } from '@ionic/angular';

import { NormaModel } from './../../interface/norma.model';

// Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Servicio
import {NormasService } from './../../services/normas.service';

// Formularios
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-norma',
  templateUrl: './norma.component.html',
  styleUrls: ['./norma.component.scss'],
})
export class NormaComponent {

  norma: NormaModel[] = [];

  forma: FormGroup;

  //para insertar tarea necesitamos instancia
  normasCollection: AngularFirestoreCollection<NormaModel>;
  $normas: Observable<NormaModel[]>; // porque el array varía en tiempo real

  // Para select

  deporte: any[] = [];
  criterio: any[] = [];

  constructor(  private db: AngularFirestore,
                private platform: Platform,
                private normasService: NormasService,
                private fb: FormBuilder) {

  // Definimos datos collección del Firebase
  this.normasCollection = this.db.collection<NormaModel>('norma');
  this.$normas = this.normasCollection.valueChanges();

  this.buildForm();


   // Select DEPORTE
  this.platform.ready().then(() => {
    this.deporte = [{ deporte: 'BTT'}, { deporte: 'Road'}, { deporte: 'Running'}, { deporte: 'Cinta'}, { deporte: 'Spinning'} ];
  });

// Select CRITERIO
  this.platform.ready().then(() => {
    this.criterio = [{ criterio: 'Desnivel'}, { criterio: 'Distancia'}, { criterio: 'Tiempo'}];
  });

  }

  // Constructor de formulario
  private buildForm() {

    this.forma = this.fb.group({
      nombre: ['', [
                    Validators.required,
                    Validators.minLength(3)]
                    ], // Valor, regla validación, validación asíncrona
      deporte: ['BTT', Validators.required],
      criterio: ['Desnivel', Validators.required],
      minValor: ['', [
                      Validators.required,
                      Validators.pattern('^[0-9]{1,4}$')]
                    ],
      coeficiente: ['', [
                          Validators.required,
                          Validators.pattern('^[0-9]+([.][0-9]+)?$')]
                      ]
    });

  }


  guardarCambios(forma) {

    this.normasService.agregarNorma(this.forma.value);

    // this.normasService.crearNorma(this.forma.value);
    this.forma.reset({
      nombre: '',
      deporte: 'BTT',
      criterio: 'Desnivel',
      minValor: '',
      coeficiente: '0.0'
    });


  }
// campos personalizados para validación

get nombreField() {
  return this.forma.get('nombre');
}


}



