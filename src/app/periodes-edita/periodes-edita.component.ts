import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
    this.periodes.splice(this.periodes.indexOf(id), 1);
  }

  AfegeixPeriode() {
    this.periodes.push(new Periode());
  }
}
