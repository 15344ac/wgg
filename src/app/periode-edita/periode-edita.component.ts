import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Periode } from '../definicions/periode';
import { ActivatedRoute } from '@angular/router';
import { WggService } from '../wgg.service';

@Component({
  selector: 'app-periode-edita',
  templateUrl: './periode-edita.component.html',
  styleUrls: ['./periode-edita.component.css']
})
export class PeriodeEditaComponent implements OnInit {

  IdPeriode: number;

  @Input() periode: Periode;

  set idPeriode(id: number)  {
    this.IdPeriode = id;
    this.getPeriode();
  }

  get idPeriode()  {
    return this.IdPeriode;
  }

  getPeriode(): void {
        const user = 'undefined';
        if (this.IdPeriode) {
        this.wggService.getPeriode(user, this.IdPeriode).subscribe(periode =>           {
            Object.assign(this.periode, periode);
            console.log('Carregat periode joc');
          });
        }
      }

  constructor(
    private route: ActivatedRoute,
    private wggService: WggService
  ) { }

  ngOnInit() {
    if (this.periode) {
      this.idPeriode = this.periode.id;
    }

  }

}
