
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Periode } from './definicions/periode';
import { WggService } from './wgg.service';
import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Provant WGG';
  events: string[] = [];
  opened = true;
  user: string;

  set idioma (valor: string)  {
    this.wggService.SetIdioma(valor);
  }

  constructor(private wggService: WggService,
    private route: Router,
    private activated: ActivatedRoute) {
    console.log('Iniciat');
    route.events.subscribe(e =>  {
      if (e instanceof NavigationEnd)      {
        const children = route.parseUrl(e.url).root.children[PRIMARY_OUTLET];
        if (children) {
          console.log('Nova ruta: ' + e.url + ' - ' + children.segments[0]);
          this.user = children.segments[0].toString();
        }
      }
    });
  }



  tanca() {
    this.opened = false;
  }
}
