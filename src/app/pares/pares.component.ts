import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pares',
  templateUrl: './pares.component.html',
  styleUrls: ['./pares.component.css']
})
export class ParesComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

}
