import { Component, OnInit } from '@angular/core';

import { NormaModel } from './../../interface/norma.model';
import { NgForm } from '@angular/forms';
import { NormasService } from 'src/app/services/normas.service';

@Component({
  selector: 'app-norma',
  templateUrl: './norma.page.html',
  styleUrls: ['./norma.page.scss'],
})
export class NormaPage implements OnInit {

  norma: NormaModel[] = [];



  constructor( private normaService: NormasService) { }

  ngOnInit() {
    // this.normaService.getNormas()
    // .subscribe( (data: any) => {
    //   const normas = data.norma;
    //   this.norma = normas;
    //  });
  }

  guardar( form: NgForm) {

    if ( form.invalid) {
      console.log('Formulario no es válido');
      return;
    }

    console.log(this.norma);
    this.normaService.crearNorma( this.norma);

    // const tempNorma = this.normaService.crearNorma(this.norma.id, this.norma.nombre, this.norma.deporte, this.norma.criterio,  this.norma.minValor, this.norma.coeficiente)
    // const tempNorma = this.normaService.crearNorma(this.norma)
    // .subscribe (resp => {
    //   console.log(tempNorma);
    // });

   
   }


}
