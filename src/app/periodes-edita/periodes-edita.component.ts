import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WggService } from '../wgg.service';
import { Periode } from '../definicions/periode';

@Component({
  selector: 'app-periodes-edita',
  templateUrl: './periodes-edita.component.html',
  styleUrls: ['./periodes-edita.component.css']
})
export class PeriodesEditaComponent implements OnInit {

  @Input() periodes: Periode[];


  constructor(

  ) { }

  ngOnInit() {
  }

  EliminaPeriode(id: Periode)  {
    this.periodes = this.periodes.filter(periode => periode !== id);
  }

  AfegeixPeriode() {
    this.periodes = this.periodes.concat(new Periode());
  }
}
