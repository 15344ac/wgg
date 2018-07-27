import { Component, OnInit, Input } from '@angular/core';
import {Joc} from '../definicions/joc';
import { WggService } from '../wgg.service';
import { Periode } from '../definicions/periode';
import { Escenari } from '../definicions/escenari';


@Component({
  selector: 'app-llista-jocs',
  templateUrl: './llista-jocs.component.html',
  styleUrls: ['./llista-jocs.component.css']
})
export class LlistaJocsComponent implements OnInit {

@Input() jocs: Joc[];

@Input() periode: Periode;

@Input() permetEditar: boolean;


jocSeleccionat: Joc;

consultaNota(joc: Joc): string {
  if (joc.escenariUnic) {
    return joc.escenariUnic.nota;
  }

  if (!this.periode) {
    return null;
  }

  const escenaris = this.consultaEscenaris(joc);

  let nota = null;

  escenaris.forEach(element => {
      if (element.nota) {
        if (nota) {
          if (element.nota < nota)          {
            nota = element.nota;
          }
        } else {
          nota = element.nota;
        }
      }
  });

  return nota;
}

consultaEscenaris(joc: Joc): Escenari[] {
  if (!this.periode) {
    return null;
  }

  return joc.escenaris.filter(escenari => escenari.periodes.some(periode => {
      if (periode) {
        return periode.id === this.periode.id;
      } else { return false; }
    }));
  }

  onSelect(joc: Joc):
  void {
    this.jocSeleccionat = joc;
  }

  constructor(private wggService: WggService) {

  }

  ngOnInit() {

  }

}
