import { Component, OnInit } from '@angular/core';
import { MenuController} from '@ionic/angular';

// import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
// Con menu controller gestionamos que el menú vuelva a aparecer una vez nos hemos logueado
  constructor(
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

}
