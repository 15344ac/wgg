import { Component, OnInit , Input} from '@angular/core';
import {Joc} from '../definicions/joc';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WggService} from '../wgg.service';
import { Periode } from '../definicions/periode';
import { Escenari } from '../definicions/escenari';
import { forEach } from '@angular/router/src/utils/collection';
import { DataHora } from '../definicions/dataHora';

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
    this.wggService.getJoc(user, id).subscribe(joc => {
      this.joc = joc;
      this.joc.escenaris.forEach(escenari => {
        if (escenari.dataInici && (escenari.dataInici.dia || escenari.dataInici.mes || escenari.dataInici.any)) {
          escenari.cadenaDataInici = '';
          if (escenari.dataInici.dia) {
            escenari.cadenaDataInici = escenari.dataInici.dia +  '/';
          }

          if (escenari.dataInici.mes) {
            escenari.cadenaDataInici = escenari.dataInici.mes +  '/';
          }

          if (escenari.dataInici.any) {
            escenari.cadenaDataInici = escenari.dataInici.any.toString();
          }
        }

        if (escenari.dataFi && (escenari.dataFi.dia || escenari.dataFi.mes || escenari.dataFi.any)) {
          escenari.cadenaDataFi = '';
          if (escenari.dataFi.dia) {
            escenari.cadenaDataFi = escenari.dataFi.dia +  '/';
          }

          if (escenari.dataFi.mes) {
            escenari.cadenaDataFi = escenari.dataFi.mes +  '/';
          }

          if (escenari.dataFi.any) {
            escenari.cadenaDataFi = escenari.dataInici.any.toString();
          }
        }
      });
    }
      );
    });
  }

  EliminaEscenari(id: Escenari)  {
    this.joc.escenaris = this.joc.escenaris.filter(escenari => escenari !== id);
  }

  AfegeixEscenari(): void {
    const escenari = new Escenari();
    escenari.coincideix = true;
    this.joc.escenaris = this.joc.escenaris.concat(escenari);
  }

  CadenaToDataHora(data: string): DataHora {
    const separats = data.split('/');
    const dataHora = new DataHora();
    if (separats.length === 0) {
      dataHora.any = parseInt(data, 10);
    }

    if (separats.length === 1) {
      dataHora.any = parseInt(data, 10);
    }

    if (separats.length === 2) {
      dataHora.any = parseInt(separats[1], 10);
      dataHora.mes = parseInt(separats[0], 10);
    }

    if (separats.length === 3) {
      dataHora.any = parseInt(separats[2], 10);
      dataHora.mes = parseInt(separats[1], 10);
      dataHora.dia = parseInt(separats[0], 10);
    }

    return dataHora;
}

  Aplicar(): void {
    for (const escenari of this.joc.escenaris) {
        if (!escenari.cadenaDataInici) {
          escenari.dataInici = undefined;
        } else {
            escenari.dataInici = this.CadenaToDataHora(escenari.cadenaDataInici);
        }

        if (!escenari.cadenaDataFi) {
          escenari.dataFi = undefined;
        } else {
            escenari.dataFi = this.CadenaToDataHora(escenari.cadenaDataFi);
        }
    }
    this.wggService.UpdateJoc(this.joc).subscribe(resposta =>    {

    }
    );
  }

}
