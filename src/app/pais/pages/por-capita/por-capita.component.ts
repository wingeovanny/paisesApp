import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capita',
  templateUrl: './por-capita.component.html',
  styleUrls: ['./por-capita.component.scss']
})
export class PorCapitaComponent {

  termino: string = '';
  hayErro: boolean = false;
  paises: Country[] = [];

  constructor(private service: PaisService) { }

  buscar(termino: string) {
    this.hayErro = false;

    this.termino = termino;
    console.log(this.termino);

    this.service.buscarCapital(this.termino).subscribe((paises) => {
      console.log(paises);
      this.paises = paises;


    }, (err) => {
      console.log('Error');
      console.info(err);
      this.hayErro = true;
      this.paises = [];
    });

  }


}
