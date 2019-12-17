import { Component, OnInit } from '@angular/core';

import { NormaModel } from './../../interface/norma.model';

// Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-normas',
  templateUrl: './normas.page.html',
  styleUrls: ['./normas.page.scss'],
})
export class NormasPage implements OnInit {


  $normas: Observable<NormaModel[]>; // porque el array varía en tiempo real
  normasCollection: AngularFirestoreCollection<NormaModel>;

  constructor(
    private db: AngularFirestore
  ) { }

  ngOnInit() {

    this.normasCollection = this.db.collection<NormaModel>('norma');
    this.$normas = this.normasCollection.valueChanges();

    console.log(this.$normas);
  }


}
