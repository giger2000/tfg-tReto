import { Component, OnInit } from '@angular/core';

import {NormasService } from './../../services/normas.service';

import { NormaModel } from './../../interface/norma.model';
import { Observable } from 'rxjs';

// Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


// Ionic loading
import { LoadingController } from '@ionic/angular';

import { faTrashAlt, faPencilAlt} from '@fortawesome/free-solid-svg-icons';

// Formularios
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
// ionic select
import { Platform } from '@ionic/angular';





@Component({
  selector: 'app-normas',
  templateUrl: './normas.component.html',
  styleUrls: ['./normas.component.scss'],
})
export class NormasComponent implements OnInit {
  // Icono papelera
  faTrash = faTrashAlt;
  faPencil = faPencilAlt;
  // Para los cargadores de alertas iniciales
  cargando = false;

  // tempNormas: any[] ; // Para el loading


  // $normas: Observable<NormaModel[]>; // porque el array varía en tiempo real
  // normasCollection: AngularFirestoreCollection<NormaModel>;

  normas: any;

  editNorma: any = {
    nombre: ''
  }
  forma: FormGroup;
  // Para select
  
  deporte: any[] = [];
  criterio: any[] = [];


  constructor(
    private db: AngularFirestore,
    public loadingController: LoadingController,
    private normasService: NormasService,
    private fb: FormBuilder,
    private platform: Platform,
    ) {
      this.buildForm();
      // this.cargando = true;
      // Llenamos normas con la lista de normas de la colección a la que nos suscribimos
      this.normasService.listaNorma()
        .subscribe(norma => {
          this.normas = norma;
          // this.cargando = false;
          console.log(this.normas);
        });

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



  ngOnInit() {
 

    // this.normasCollection = this.db.collection<NormaModel>('norma');
    // this.$normas = this.normasCollection.valueChanges();
    
    // Cargar pantalla de normas
    // this.normasService
    // .getNormas()
    // .subscribe ( resp => {
    //   // console.log ('esperando subscribe');
    //       // this.tempNormas = resp;
    //       this.cargando = false;
    //       console.log('respuesta: ', resp);
    //     });

  }
// Al pulsar el icono de papelera
  eliminar(norma) {
    this.normasService.eliminarNorma(norma);
  }

  editar(norma) {
    this.editNorma = norma;
    console.log('Estamos en edición', this.editNorma);
  }

  agregarNormaEdita(){
    this.normasService.editarNorma(this.editNorma);
  }

// Hacer scroll dentro de la mism página 
//   scroll(el: HTMLElement) {
//     console.log('vamos a por el scroll');
//     el.scrollIntoView({behavior:"smooth"});
// }


}
