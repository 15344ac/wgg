import { Component, OnInit, Input } from '@angular/core';
import { WggService } from '../wgg.service';
import { Periode } from '../definicions/periode';
import { DataHora } from '../definicions/dataHora';

@Component({
  selector: 'app-barra-navegacio',
  templateUrl: './barra-navegacio.component.html',
  styleUrls: ['./barra-navegacio.component.css']
})
export class BarraNavegacioComponent implements OnInit {

  periodes: Periode[];
  nom: string;
  dataI: string;
  dataF: string;

  @Input()
  set filtreNom(filtre: string)  {
    this.nom = filtre;
    this.getPeriodes();
  }

  @Input()
  set filtreDataInici(filtre: string)  {
    this.dataI = filtre;
    this.getPeriodes();
  }

  @Input()
  set filtreDataFi(filtre: string)  {
    this.dataF = filtre;
    this.getPeriodes();
  }

  getPeriodes(): void {
    if (
    ((this.nom) && (this.nom.length > 0))
    ||
    ((this.dataI) && (this.dataI.length > 0))
    ||
    ((this.dataF) && (this.dataF.length > 0))
     ) {
      this.wggService.getPeriodes(this.nom, this.dataI, this.dataF).subscribe(llegit => this.periodes = llegit);
    } else {
      this.getPares();
    }
  }

  getPares(): void  {
    this.wggService.getPares().subscribe(pares => this.periodes = pares);
  }

  constructor(private wggService: WggService) { }

  ngOnInit() {
   this.getPares();
  }

}
