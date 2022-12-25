import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitaComponent } from './pages/por-capita/por-capita.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';



@NgModule({
  declarations: [
    PorCapitaComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  exports: [
    PorCapitaComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaisModule { }
