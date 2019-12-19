import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

// ionic select
import { Platform } from '@ionic/angular';

import { NormaModel } from './../../interface/norma.model';

// Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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
  // selectedDeporte: string = "BTT";
  // selectedCriterio: string = "Desnivel";
  deporte: any[] = [];
  criterio: any[] = [];

  constructor(  private db: AngularFirestore,
                private platform: Platform) {

  // Definimos datos collección del Firebase
  this.normasCollection = this.db.collection<NormaModel>('norma');
  this.$normas = this.normasCollection.valueChanges();

  this.forma = new FormGroup({
    'nombre': new FormControl('', [
                                    Validators.required,
                                    Validators.minLength(3)
                                  ]), // Valor, regla validación, validación asíncrona
    'deporte': new FormControl('BTT', Validators.required),
    'criterio': new FormControl('Desnivel', Validators.required),
    'minValor': new FormControl('', [
                                      Validators.required,
                                      Validators.pattern("^[0-9]{1,4}$")
                                    ]),
    'coeficiente': new FormControl('', [
                                        Validators.required,
                                        Validators.pattern("^[0-9]+([.][0-9]+)?$")
                                      ])
  });

   // Select DEPORTE
  this.platform.ready().then(() => {
    this.deporte = [{ deporte: 'BTT'}, { deporte: 'Road'}, { deporte: 'Running'}, { deporte: 'Cinta'}, { deporte: 'Spinning'} ];
  });

// Select CRITERIO
  this.platform.ready().then(() => {
    this.criterio = [{ criterio: 'Desnivel'}, { criterio: 'Distancia'}, { criterio: 'Tiempo'}];
  });

    // Recuperar datos de formulario
    // this.forma.setValue(this.norma);
  }

  guardarCambios(forma) {

   // console.log(this.forma.value);

    // Guardar datos en Firebase
    const objForm = this.forma.value; // objeto con todo el formulario

    // console.log('Datos del objForm del formulario ', objForm);

    const id = this.db.createId();

    this.normasCollection.doc(id).set(objForm);
    this.resetForm();
  }

  // Función para borrar el formulario tras envío
  resetForm() {
    // Reset del formulario al enviar los datos
    this.forma.reset({
      nombre: '',
      deporte: 'BTT',
      criterio: 'Desnivel',
      minValor: '',
      coeficiente: '0.0'
    });
  }



}



