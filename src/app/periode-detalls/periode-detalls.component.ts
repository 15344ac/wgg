import { Component, OnInit, Input } from '@angular/core';
import { Periode } from '../definicions/periode';
import { ActivatedRoute } from '@angular/router';
import { WggService } from '../wgg.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Joc } from '../definicions/joc';


@Component({
  selector: 'app-periode-detalls',
  templateUrl: './periode-detalls.component.html',
  styleUrls: ['./periode-detalls.component.css']
})
export class PeriodeDetallsComponent implements OnInit {

  periode: Periode;
  pares: Periode[];

  jocsPrincipals: Joc[];
  jocsEscenaris: Joc[];
  jocsEpoca: Joc[];
  jocsEpocaEscenaris: Joc[];
  user: string;

  constructor(
    private route: ActivatedRoute,
    private wggService: WggService,
    private location: Location
  ) {
    wggService.Actualitza.subscribe(() =>  {
      this.getPeriode();
    });
  }

  ngOnInit() {
    this.getPeriode();
  }

  getPeriode(): void {
    this.route.params.subscribe(routeParams =>      {
        const id = routeParams.id;
        const user = routeParams.user;
        this.user = user;
        this.wggService.getParesPeriode(user, id).subscribe(pares => this.pares = pares);
        this.wggService.getPeriode(user, id).subscribe(periode =>           {
            this.periode = periode;
            this.wggService.getJocs(user, null, periode, true, false, true).subscribe(jocs => this.jocsPrincipals = jocs);
            this.wggService.getJocs(user, null, periode, false, false, true).subscribe(jocs => this.jocsEpoca = jocs);
            this.wggService.getJocs(user, null, periode, true, true, true).subscribe(jocs => this.jocsEscenaris = jocs);
            this.wggService.getJocs(user, null, periode, false, true, true).subscribe(jocs => this.jocsEpocaEscenaris = jocs);
          });
      });
  }
}
