import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent implements OnInit {
  listadoPeliculas: Pelicula[] = [
    new Pelicula(
      100,
      'The Exorcist',
      'terror',
      '01/03/2021',
      4000000,
      '../../../assets/pelicula1.jpg'
    ),
    new Pelicula(
      105,
      'The Martian',
      'comedia',
      '01/05/2021',
      3500000,
      '../../../assets/pelicula2.jpg'
    ),
    new Pelicula(
      115,
      'Avengers',
      'otros',
      '06/06/2021',
      2200000,
      '../../../assets/pelicula3.jpg'
    ),
  ];

  peliculaActiva: Pelicula = new Pelicula(0, '', '', '', 0, '');

  constructor() {}

  ngOnInit(): void {}

  TomarPeliculaSeleccionada($event: Pelicula) {
    this.peliculaActiva = $event;
    console.info($event);
  }
}
