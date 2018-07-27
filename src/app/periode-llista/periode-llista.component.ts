import { Component, OnInit, Input } from '@angular/core';
import { Periode } from '../definicions/periode';
import { Joc } from '../definicions/joc';
import { WggService } from '../wgg.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-periode-llista',
  templateUrl: './periode-llista.component.html',
  styleUrls: ['./periode-llista.component.css']
})
export class PeriodeLlistaComponent implements OnInit {

  @Input() periode: Periode;

  @Input() user: string;

  mostra: Boolean;

  jocs: Joc [];

  numeroJocs: number;

  OnMostra() {
    if (this.mostra) {
      this.mostra = false;
    } else { this.mostra = true; }
  }

  constructor(private wggService: WggService) {

  }

  ngOnInit() {
    this.wggService.getNumeroJocs(this.user, this.periode.id).subscribe(numero => this.numeroJocs = numero);
    this.wggService.getJocs(this.user, null, this.periode, true, false, false).subscribe(jocs => this.jocs = jocs);
  }

}
