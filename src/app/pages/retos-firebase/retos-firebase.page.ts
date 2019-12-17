import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Reto } from './../../interface/reto';

// Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-retos-firebase',
  templateUrl: './retos-firebase.page.html',
  styleUrls: ['./retos-firebase.page.scss'],
})
export class RetosFirebasePage implements OnInit {

$retos: Observable<Reto[]>; // porque el array varía en tiempo real
retosCollection: AngularFirestoreCollection<Reto>;

  constructor(
    private db: AngularFirestore,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    // Trabajamos con Observable porque trabajamos en tiempo real
    this.retosCollection = this.db.collection<Reto>('retos');
    this.$retos = this.retosCollection.valueChanges();


  }

  async openAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Nuevo reto',
      inputs: [
        {
          name: 'name',
          placeholder: 'Nombre del reto'
        },
        {
          name: 'dateStart',
          placeholder: 'Fecha Inicial'
        },
        {
          name: 'dateEnd',
          placeholder: 'Fecha Final'
        }
      ],
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel'
        },
        {
          text: 'crear',
          handler: (data) => {
            this.addReto(data.name, data.dateStart, data.dateEnd);
          }
        }
      ]
    });
    await alert.present();
  }

  private addReto(name: string, dateStart: string, dateEnd: string) {
 
    const newReto: Reto = {
      name,
      dateStart: '',
      dateEnd: '',
      activo: false,
    };
    this.retosCollection.add(newReto);
  }

}
