import { Component, OnInit, Input } from '@angular/core';
import { Periode } from '../definicions/periode';
import { Joc } from '../definicions/joc';
import { WggService } from '../wgg.service';

@Component({
  selector: 'app-periode-llista',
  templateUrl: './periode-llista.component.html',
  styleUrls: ['./periode-llista.component.css']
})
export class PeriodeLlistaComponent implements OnInit {

  @Input() periode:Periode

  mostra:Boolean;

  jocs: Joc[]

  OnMostra()
  {
    if (this.mostra)
      this.mostra=false;
    else this.mostra=true;
  }

  constructor(private wggService: WggService) { 
    
  }



  ngOnInit() {
    this.wggService.getJocs(null,this.periode,true,false,false).subscribe(jocs => this.jocs=jocs);    
  }

}
