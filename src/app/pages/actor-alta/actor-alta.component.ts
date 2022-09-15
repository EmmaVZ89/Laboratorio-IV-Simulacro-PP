import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss'],
})
export class ActorAltaComponent implements OnInit {
  actorNuevo: Actor = new Actor(0, '', '', '', 'Masculino', '', '');
  listadoActores: Actor[] = [];
  vistaListado = false;
  textoVistaListado = 'Ver Listado de Actores';

  constructor() {}

  ngOnInit(): void {}

  agregarActor($event: Event) {
    $event.preventDefault();
    if (
      this.actorNuevo.nombre === '' ||
      this.actorNuevo.apellido === '' ||
      this.actorNuevo.edad === '' ||
      this.actorNuevo.sexo === '' ||
      this.actorNuevo.pais === '' ||
      this.actorNuevo.fotoPais === ''
    ) {
      alert('Debes completar todos los campos y seleccionar un país!!!');
    } else {
      this.listadoActores.push(this.actorNuevo);
      this.actorNuevo = new Actor(0, '', '', '', 'Masculino', '', '');
      console.log(this.listadoActores);
    }
    // console.log(this.actorNuevo);
  }

  tomarPaisSeleccionado($event: any) {
    // console.log($event);
    this.actorNuevo.pais = $event.name.common;
    this.actorNuevo.fotoPais = $event.flags.png;
  }

  verListado() {
    this.vistaListado = !this.vistaListado;
    if (!this.vistaListado) {
      this.textoVistaListado = 'Ver Listado de Actores';
    } else {
      this.textoVistaListado = 'Dejar de Ver Listado';
    }
  }
}
