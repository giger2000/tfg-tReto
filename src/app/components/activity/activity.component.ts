import { Component, OnInit } from '@angular/core';
import { Actividad } from './../../interface/actividad';

// Servicio
import { AuthService } from './../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

// Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


import { ActivityService} from './../../services/activity.service';

// Formularios
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
// ionic select
import { Platform } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {

  actividad: Actividad [] = [];

  form: FormGroup;

  actividadCollection: AngularFirestoreCollection<Actividad>;
  actividades$: Observable<Actividad[]>; // porque el array varía en tiempo real


  type: any[] = [];

  constructor(private activityService: ActivityService,
              private db: AngularFirestore,
              private fb: FormBuilder,
              private platform: Platform,
              public auth: AuthService,
              private afAuth: AngularFireAuth) {
    
              this.actividadCollection = this.db.collection<Actividad>('activities');
              this.actividades$ = this.actividadCollection.valueChanges();
              this.buildForm();

               // Select DEPORTE
              this.platform.ready().then(() => {
                this.type = [{ type: 'BTT'}, { type: 'Road'}, { type: 'Running'}, { type: 'Cinta'}, { type: 'Spinning'} ];
              });
            }

  ngOnInit() {
    console.log(this.auth.user$);


  }

  private buildForm() {

    this.form = this.fb.group({
      // id: [''],
      name: ['', [
                    Validators.required,
                    Validators.minLength(3)]
                    ], // Valor, regla validación, validación asíncrona
      type: ['BTT', Validators.required],
      athlete: [this.afAuth.auth.currentUser.email],
      distance: ['', Validators.required],
      total_elevation_gain: ['', Validators.required],
      moving_time: ['', Validators.required],
      start_date: ['', Validators.required],
      userID: [this.afAuth.auth.currentUser.uid],
    });

  }

  guardar( form ) {
    // Swal.fire({
    //   title: 'Espere',
    //   text: 'Guardando información',
    //   icon: 'info',
    //   allowOutsideClick: false

    // });
    // Swal.showLoading();

  


  

    this.activityService.crearActividad( this.form.value);



  }
  

}
