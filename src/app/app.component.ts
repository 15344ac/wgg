import { Component, OnInit } from '@angular/core';
import { Periode } from './definicions/periode';
import { WggService } from './wgg.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Provant WGG';
  periodes: Periode[];

  constructor(private wggService: WggService) {}

    OnInit() {
    this.getPares();
  }

  getPares(): void {
    this.wggService.getPares().subscribe(pares => this.periodes = pares);
  }
}
