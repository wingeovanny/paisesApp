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
  paisesSugerido: Country[] = [];
  mostrarSugerido: boolean = false;

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
    this.mostrarSugerido = true;
    this.termino = termino;
    this.service.buscarPais(termino)
      .subscribe(
        resp => this.paisesSugerido = resp.splice(0, 4),
        (err) => this.paisesSugerido = []

      );

  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }


}
