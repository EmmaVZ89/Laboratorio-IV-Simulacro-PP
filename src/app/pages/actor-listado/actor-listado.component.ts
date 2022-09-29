import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss'],
})
export class ActorListadoComponent implements OnInit {
  @Input() listadoRecibidoDeActores?: Actor[];
  @Output() PasamosUnActor: EventEmitter<Actor> = new EventEmitter<Actor>();

  constructor() {}

  ngOnInit(): void {}

  pasarActor(actor: any) {
    this.PasamosUnActor.emit(actor);
  }
}
