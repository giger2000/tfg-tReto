import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-norma-data',
  templateUrl: './norma-data.page.html',
  styleUrls: ['./norma-data.page.scss'],
})
export class NormaDataPage {

  forma: FormGroup; // forma es el nomre que le ponemos al form

  constructor() {

    // la lógica del formulario

    this.forma = new FormGroup({
      'nombre': new FormControl('Alberto', Validators.required), // valor por defecto , reglas de validacion, valid. async
      'deporte': new FormControl('', Validators.required),
      'criterio': new FormControl('', Validators.required),
      'minValor': new FormControl('', Validators.required),
      'coeficiente': new FormControl('', Validators.required)

    });
  }

  guardarCambios() {
    console.log(this.forma.value);
  }



}
