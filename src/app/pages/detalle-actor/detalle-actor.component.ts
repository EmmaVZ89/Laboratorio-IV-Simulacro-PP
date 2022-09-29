import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.scss'],
})
export class DetalleActorComponent implements OnInit {
  @Input() actorRecibido?: any;

  constructor() {}

  ngOnInit(): void {}

  verPais() {
    console.log(this.actorRecibido?.pais);
  }
}
