import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activeroute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {

    this.getPais();

  }

  getPais() {
    this.activeroute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorCodigo(id)),
        tap(console.log)
      )
      .subscribe(pais => this.pais = pais);
  }

}
