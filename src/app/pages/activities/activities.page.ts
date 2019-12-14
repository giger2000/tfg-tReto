import { Component, OnInit } from '@angular/core';
import { ActivityService } from './../../services/activity.service';

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
    private _activityService: ActivityService
  ) { }

  ngOnInit() {

    // Utilizamos los datos del servicio, y con suscripción recuperamos todo.
    this._activityService.getData()
    .subscribe( (data: any) => {
      const activities = data.actividades;
      this.activities = activities;
    });
  }

}
