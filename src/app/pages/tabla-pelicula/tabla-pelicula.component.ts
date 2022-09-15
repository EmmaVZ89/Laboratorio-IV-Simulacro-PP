import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss'],
})
export class TablaPeliculaComponent implements OnInit {

  @Input() listadoRecibido?: Pelicula[];
  @Output() PasamosUnaPelicula: EventEmitter<Pelicula> =
    new EventEmitter<Pelicula>();

  constructor() {}

  ngOnInit(): void {}

  PasarPelicula(pelicula:Pelicula) {
    this.PasamosUnaPelicula.emit(pelicula);
    console.info(pelicula);
  }

}
