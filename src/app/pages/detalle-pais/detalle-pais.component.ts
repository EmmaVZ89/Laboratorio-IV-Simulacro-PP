import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.scss']
})
export class DetallePaisComponent implements OnInit {

  @Input() actorRecibido?: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
