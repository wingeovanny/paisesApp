import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss']
})
export class PorRegionComponent implements OnInit {

  regions: Array<string> = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva: string = '';


  paises: Array<Country> = [];


  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }


  activarRegion(region: string) {

    if (region === this.regionActiva) { return }
    this.regionActiva = region;


    this.paises = [];
    this.paisService.getPaisRegion(region)
      .subscribe(paises => {
        this.paises = paises;
      })

  }

  getClaseCSS(clase: string): string {
    return (clase === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  getPaisRegion() {

  }


}
