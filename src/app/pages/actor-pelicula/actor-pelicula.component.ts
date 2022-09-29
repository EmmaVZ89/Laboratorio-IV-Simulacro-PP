import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';
import { EntidadesService } from 'src/app/services/entidades.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.scss'],
})
export class ActorPeliculaComponent implements OnInit {
  listadoActores: Actor[] = [];
  listadoPeliculas: Pelicula[] = [];
  listadoAuxPeliculas: Pelicula[] = [];
  actorActivo: Actor = new Actor(0, '', '', '', '', '', '', '');

  constructor(private entidadesService: EntidadesService) {}

  ngOnInit(): void {
    this.entidadesService.traerActores().subscribe((actores) => {
      if (actores != null) {
        this.listadoActores = actores;
      }
    });
    this.entidadesService.traerPeliculas().subscribe((peliculas) => {
      if (peliculas != null) {
        this.listadoPeliculas = peliculas;
      }
    });
  }

  tomarActorSeleccionado(actor: any) {
    this.listadoAuxPeliculas = this.listadoPeliculas.filter((p) => {
      return (
        p.actor.nombre == actor.nombre && p.actor.apellido == actor.apellido
      );
    });
    this.actorActivo = actor;
  }
}
