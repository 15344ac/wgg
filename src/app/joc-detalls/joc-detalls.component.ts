import { Component, OnInit , Input} from '@angular/core';
import {Joc} from '../definicions/joc';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WggService} from '../wgg.service';
import { Periode } from '../definicions/periode';
import { Escenari } from '../definicions/escenari';

@Component({
  selector: 'app-joc-detalls',
  templateUrl: './joc-detalls.component.html',
  styleUrls: ['./joc-detalls.component.css']
})
export class JocDetallsComponent implements OnInit {

joc: Joc;

  constructor(
    private route: ActivatedRoute,
    private wggService: WggService
  ) { }

  ngOnInit() {
    this.getJoc();
  }

  getJoc(): void  {
    this.route.params.subscribe(routeParams =>      {
    const id = routeParams.id;
    const user = routeParams.user;
    this.wggService.getJoc(user, id).subscribe(joc => this.joc = joc);
    });
  }

  EliminaEscenari(id: Escenari)  {
    this.joc.escenaris = this.joc.escenaris.filter(escenari => escenari !== id);
  }

  AfegeixEscenari(): void {
    this.joc.escenaris = this.joc.escenaris.concat(new Escenari());
  }

  Aplicar(): void {
    this.wggService.UpdateJoc(this.joc).subscribe(resposta =>    {

    }
    );
  }

}
