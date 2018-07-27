import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LlistaJocsComponent} from './llista-jocs/llista-jocs.component';
import { MainComponent } from './main/main.component';
import {JocDetallsComponent} from './joc-detalls/joc-detalls.component';
import { PeriodeDetallsComponent } from './periode-detalls/periode-detalls.component';


const routes: Routes = [
  {path: ':user', component: MainComponent, runGuardsAndResolvers: 'always'},
  { path: ':user/jocs', component: LlistaJocsComponent, runGuardsAndResolvers: 'always' },
  {path: ':user/periode/:id', component: PeriodeDetallsComponent, runGuardsAndResolvers: 'always'},
];


@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
})
export class AppRoutingModule { }
