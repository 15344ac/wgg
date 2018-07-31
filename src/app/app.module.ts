import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {WggService} from './wgg.service';


import { AppComponent } from './app.component';
import { LlistaJocsComponent } from './llista-jocs/llista-jocs.component';
import { JocDetallsComponent } from './joc-detalls/joc-detalls.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { PeriodeDetallsComponent } from './periode-detalls/periode-detalls.component';
import { LlistaPeriodesComponent } from './llista-periodes/llista-periodes.component';
import { DataDetallsComponent } from './data-detalls/data-detalls.component';
import { PeriodeLlistaComponent } from './periode-llista/periode-llista.component';
import { ParesComponent } from './pares/pares.component';
import { BarraNavegacioComponent } from './barra-navegacio/barra-navegacio.component';
import {
  MatAutocompleteModule,
    MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  } from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PeriodesEditaComponent } from './periodes-edita/periodes-edita.component';
import { PeriodeEditaComponent } from './periode-edita/periode-edita.component';

@NgModule({
  declarations: [
    AppComponent,
    LlistaJocsComponent,
    JocDetallsComponent,
    MessagesComponent,
    MainComponent,
    PeriodeDetallsComponent,
    LlistaPeriodesComponent,
    DataDetallsComponent,
    PeriodeLlistaComponent,
    ParesComponent,
    BarraNavegacioComponent,
    PeriodesEditaComponent,
    PeriodeEditaComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatSidenavModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    WggService,
    MessageService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
