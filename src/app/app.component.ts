
import { Component, OnInit, Input } from '@angular/core';
import { Periode } from './definicions/periode';
import { WggService } from './wgg.service';
import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Provant WGG';
  events: string[] = [];
  opened: boolean = true;

  constructor(private wggService: WggService) {
    console.log('Iniciat');
  }
}
