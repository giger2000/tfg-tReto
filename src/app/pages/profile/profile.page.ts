import { Component, OnInit } from '@angular/core';
// Firebase
import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private afs:AngularFirestore) { }

  ngOnInit() {
  }

}
