import { Component, OnInit , Input} from '@angular/core';
import {Joc} from '../definicions/joc';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WggService} from '../wgg.service';

@Component({
  selector: 'app-joc-detalls',
  templateUrl: './joc-detalls.component.html',
  styleUrls: ['./joc-detalls.component.css']
})
export class JocDetallsComponent implements OnInit {

@Input() joc: Joc;

  constructor(
    private route: ActivatedRoute,
    private wggService: WggService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getJoc();
  }

  getJoc(): void  {
    const id = +this.route.snapshot.paramMap.get('id');

    this.wggService.getJoc(id).subscribe(joc => this.joc = joc);
  }

}
