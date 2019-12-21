import { Component, OnInit } from '@angular/core';

import {NormasService } from './../../services/normas.service';

import { NormaModel } from './../../interface/norma.model';
import { Observable } from 'rxjs';

// Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


// Ionic loading
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-normas',
  templateUrl: './normas.component.html',
  styleUrls: ['./normas.component.scss'],
})
export class NormasComponent implements OnInit {

  // Para los cargadores de alertas iniciales
  cargando = false;

  tempNormas: any[] ; // Para el loading


  $normas: Observable<NormaModel[]>; // porque el array varía en tiempo real
  normasCollection: AngularFirestoreCollection<NormaModel>;


  constructor(
    private db: AngularFirestore,
    public loadingController: LoadingController,
    private normasService: NormasService) { }

  ngOnInit() {
    this.cargando = true;

    this.normasCollection = this.db.collection<NormaModel>('norma');
    this.$normas = this.normasCollection.valueChanges();
    // Cargar pantalla de normas
    this.normasService
    .getNormas()
    .subscribe ( resp => {
      // console.log ('esperando subscribe');
          this.tempNormas = resp;
          this.cargando = false;
          console.log('respuesta: ', resp);
        });

  }

}

  // deleteOrder = data => this.ordersService.deleteCoffeeOrder(data);

  // markCompleted = data => this.ordersService.updateCoffeeOrder(data);


