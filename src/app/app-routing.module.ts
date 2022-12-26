import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { PorCapitaComponent } from './pais/pages/por-capita/por-capita.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent,
    },
    {
        path: 'capital',
        component: PorCapitaComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule { }