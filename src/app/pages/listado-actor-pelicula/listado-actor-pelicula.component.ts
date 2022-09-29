import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-actor-pelicula',
  templateUrl: './listado-actor-pelicula.component.html',
  styleUrls: ['./listado-actor-pelicula.component.scss']
})
export class ListadoActorPeliculaComponent implements OnInit {


  @Input() listadoRecibidoDePeliculas?: any;

  constructor() { }

  ngOnInit(): void {
  }

}
