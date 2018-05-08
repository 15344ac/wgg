import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LlistaJocsComponent} from './llista-jocs/llista-jocs.component';
import { MainComponent } from './main/main.component';
import {JocDetallsComponent} from './joc-detalls/joc-detalls.component'
import { PeriodeDetallsComponent } from './periode-detalls/periode-detalls.component';


const routes:Routes=[
  { path: 'jocs', component: LlistaJocsComponent },
  {path:'main',component: MainComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {path:'periode/:id',component: PeriodeDetallsComponent}
];


@NgModule({
  exports:[RouterModule],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
