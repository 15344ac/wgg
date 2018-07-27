import { Component, OnInit, Input } from '@angular/core';
import { Periode } from '../definicions/periode';

@Component({
  selector: 'app-llista-periodes',
  templateUrl: './llista-periodes.component.html',
  styleUrls: ['./llista-periodes.component.css']
})


export class LlistaPeriodesComponent implements OnInit {

@Input() periodes: Periode[];

@Input() user: String;

  constructor() {
  }

  ngOnInit() {
    }

}
