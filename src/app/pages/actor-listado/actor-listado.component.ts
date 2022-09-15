import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit {

  @Input() listadoRecibidoDeActores?: Actor[];

  constructor() { }

  ngOnInit(): void {
  }

}
