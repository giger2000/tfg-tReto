import { Component, OnInit } from '@angular/core';

import { NormaModel } from './../../interface/norma.model';
import { NormasService } from './../../services/normas.service';

// Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Ionic loading
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-normas',
  templateUrl: './normas.page.html',
  styleUrls: ['./normas.page.scss'],
})
export class NormasPage implements OnInit {

  // Para los cargadores de alertas iniciales
  cargando = false;

  tempNormas: NormaModel[] = []; //Para el loading


  $normas: Observable<NormaModel[]>; // porque el array varía en tiempo real
  normasCollection: AngularFirestoreCollection<NormaModel>;

  constructor(
    private db: AngularFirestore,
    public loadingController: LoadingController,
    private normasService: NormasService
  ) {
  }

  ngOnInit() {
    this.cargando = true;
    this.normasCollection = this.db.collection<NormaModel>('norma');
    this.$normas = this.normasCollection.valueChanges();
  
    this.normasService.getNormas()
    .subscribe ( resp => {
            this.tempNormas = resp;
            this.cargando = false;
            console.log('respuesta: ', resp);
    });

  }

  // LOADER

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando',
      duration: 2000
    });
    await loading.present();
    // ).then(loading => loading.present());
    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }



}
