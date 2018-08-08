import { Component, OnInit } from '@angular/core';
import { Joc } from '../definicions/joc';
import { WggService } from '../wgg.service';
import { Periode } from '../definicions/periode';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.css' ]
})
export class MainComponent implements OnInit {

  periodes: Periode[];
  constructor(
      private route: ActivatedRoute,
    private wggService: WggService) { }

  ngOnInit() {

  }

  getPares(): void  {
    this.route.params.subscribe(routeParams =>      {
      const user = routeParams.user;
    this.wggService.getPares(user, null).subscribe(pares => this.periodes = pares);
    });
  }
}
