import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { RetoModel } from './../../interface/reto.model';
import { NormaModel } from './../../interface/norma.model';

// Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import {RetosService} from './../../services/retos.service';
// import {NormasService } from './../../services/normas.service';



@Component({
  selector: 'app-retos-firebase',
  templateUrl: './retos-firebase.page.html',
  styleUrls: ['./retos-firebase.page.scss'],
})
export class RetosFirebasePage implements OnInit {

  retos: Observable<RetoModel[]>;
  // normas: Observable<NormaModel[]>;

  editReto: any = {
    nombre: ''
  }



  constructor(
    private db: AngularFirestore,
    private retosService: RetosService
    // private normasService: NormasService
  ) { }

  ngOnInit() {

    this.retos = this.retosService.listaReto();
    // this.normas = this.normasService.listaNormas();
    // console.log(this.retos);
    // this.cargando = false;

  }

}
