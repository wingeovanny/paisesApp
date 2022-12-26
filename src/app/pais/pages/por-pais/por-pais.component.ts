import { Country } from './../../interfaces/pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component, } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent {

  termino: string = '';
  hayErro: boolean = false;
  paises: Country[] = [];

  constructor(private service: PaisService) { }

  buscar(termino: string) {
    this.hayErro = false;

    this.termino = termino;
    console.log(this.termino);

    this.service.buscarPais(this.termino).subscribe((paises) => {
      console.log(paises);
      this.paises = paises;


    }, (err) => {
      console.log('Error');
      console.info(err);
      this.hayErro = true;
      this.paises = [];
    });

  }

  sugerencias(termino: string) {
    this.hayErro = false;


  }


}
