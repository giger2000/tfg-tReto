import { Component, OnInit } from '@angular/core';
import { ActivityService } from './../../services/activity.service';
import { MenuController} from '@ionic/angular';

// Interfaces
import { Actividad } from './../../interface/actividad';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

  // Actividades son de tipo Actividad (interface)
  activities: Actividad[] = [];

  constructor(
    private activityService: ActivityService
    // private menuCtrl: MenuController
  ) { }

  ngOnInit() {
    // this.menuCtrl.enable(true);
    // Utilizamos los datos del servicio, y con suscripción recuperamos todo.
    this.activityService.getData()
    .subscribe( (data: any) => {
      const activities = data.actividades;
      this.activities = activities;
      //  console.log("actividades ",this.activities);
    });

    this.puntuar();
  }

  puntuar() {
    this.activities.length;
    console.log( this.activities.length);
  }

}
