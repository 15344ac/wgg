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
  jocs: Joc[] = [];

  periodeSeleccionat: Periode
  periodes:Periode[]
  constructor(private wggService: WggService) { }

  ngOnInit() {
    this.getPares();
  }

  getPares(): void
  {
    this.wggService.getPares().subscribe(pares => this.periodes=pares);
  }

  getPeriode(id): void
  {
    this.wggService.getPeriode(id).subscribe(periode => this.periodeSeleccionat=periode);
  }

  getJocs(): void {
    this.wggService.getJocs(null,null,false,true,false)
      .subscribe(jocs => this.jocs = jocs.slice(1, 5));
  }
}