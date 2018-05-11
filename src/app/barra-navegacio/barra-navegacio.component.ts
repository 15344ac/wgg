import { Component, OnInit, Input } from '@angular/core';
import { WggService } from '../wgg.service';
import { Periode } from '../definicions/periode';

@Component({
  selector: 'app-barra-navegacio',
  templateUrl: './barra-navegacio.component.html',
  styleUrls: ['./barra-navegacio.component.css']
})
export class BarraNavegacioComponent implements OnInit {

  periodes: Periode[];
  nom: string;

  @Input()
  set filtreNom(filtre: string)  {
    this.nom = filtre;
    this.getPeriodes();
  }

  getPeriodes(): void {
    if ((this.nom) && (this.nom.length > 0)) {
      this.wggService.getPeriodes(this.nom, null, null).subscribe(llegit => this.periodes = llegit);
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
