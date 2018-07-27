import { Component, OnInit, Input } from '@angular/core';
import { WggService } from '../wgg.service';
import { Periode } from '../definicions/periode';
import { DataHora } from '../definicions/dataHora';
import { ActivatedRoute } from '@angular/router';

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
  joc: string;
  @Input() user: string;

  @Input()
  set filtreJoc(filtre: string) {
    this.joc = filtre;
    this.getPeriodes();
  }

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


  setPeriodes(periodes: Periode[]) {
    this.periodes = periodes;
  }

  getPeriodes(): void {
    if (
    ((this.nom) && (this.nom.length > 0))
    ||
    ((this.dataI) && (this.dataI.length > 0))
    ||
    ((this.dataF) && (this.dataF.length > 0))
    ) {
      this.wggService.getPeriodes(this.user, this.nom, this.dataI, this.dataF, this.joc).subscribe(llegit => this.setPeriodes(llegit));
    } else {
      this.getPares(this.joc);
    }
  }

  getPares(filtreJocs: string): void  {
    this.wggService.getPares(this.user, filtreJocs).subscribe(pares => this.setPeriodes(pares));
  }

  constructor(private wggService: WggService) { }

  ngOnInit() {
   this.getPares(null);
  }

}
