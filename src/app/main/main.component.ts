import { Component, OnInit } from '@angular/core';
import { Joc } from '../definicions/joc';
import { WggService } from '../wgg.service';
import { Periode } from '../definicions/periode';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.css' ]
})
export class MainComponent implements OnInit {

  periodes: Periode[];
  constructor(private wggService: WggService) { }

  ngOnInit() {
    this.getPares();
  }

  getPares(): void  {
    this.wggService.getPares().subscribe(pares => this.periodes = pares);
  }
}
