import { Component, OnInit, Input } from '@angular/core';
import { DataHora } from '../definicions/dataHora';

@Component({
  selector: 'app-data-detalls',
  templateUrl: './data-detalls.component.html',
  styleUrls: ['./data-detalls.component.css']
})
export class DataDetallsComponent implements OnInit {

  @Input() data: DataHora;

  constructor() { }

  ngOnInit() {
  }

}
