import { Component, OnInit } from '@angular/core';
import { EntidadesService } from 'src/app/services/entidades.service';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss'],
})
export class PeliculaAltaComponent implements OnInit {
  listadoImagenes: any = null;
  listadoActores: Actor[] = [];
  listadoPeliculas: Pelicula[] = [];
  peliculaNueva: Pelicula = new Pelicula(0, '', '', '', 0, '', {});
  formEnviado: boolean = false;
  imagenSeleccionada: boolean = false;
  vistaListado = false;
  textoVistaListado = 'Ver Listado de Peliculas';

  //@ts-ignore
  forma: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private entidadesService: EntidadesService
  ) {}

  ngOnInit(): void {
    this.listadoImagenes = this.entidadesService.traerImagenesPeliculas();
    this.forma = this.formBuilder.group({
      nombre: ['', Validators.required],
      espectadores: ['', Validators.required],
      tipo: ['', Validators.required],
      estreno: ['', Validators.required],
      portada: ['', Validators.required],
      actor: ['', Validators.required],
    });

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

  agregarPelicula(event: any) {
    this.forma.setValue({
      nombre: this.forma.getRawValue().nombre,
      espectadores: this.forma.getRawValue().espectadores,
      tipo: this.forma.getRawValue().tipo,
      estreno: this.forma.getRawValue().estreno,
      portada: this.peliculaNueva.fotoPelicula,
      actor: this.peliculaNueva.actor,
    });

    if (!this.forma.invalid) {
      this.peliculaNueva.nombre = this.forma.getRawValue().nombre;
      this.peliculaNueva.cantidadPublico =
        this.forma.getRawValue().espectadores;
      this.peliculaNueva.tipo = this.forma.getRawValue().tipo;
      this.peliculaNueva.fechaEstreno = this.forma.getRawValue().estreno;
      this.entidadesService.crearPelicula(this.peliculaNueva);
      this.peliculaNueva = new Pelicula(0, '', '', '', 0, '', {});
      this.forma.reset();
      this.imagenSeleccionada = false;
    } else {
      this.formEnviado = true;
    }
  }

  seleccionarPortada(portada: string) {
    this.peliculaNueva.fotoPelicula = portada;
    this.imagenSeleccionada = true;
  }

  tomarActorSeleccionado($actor: any) {
    this.peliculaNueva.actor = $actor;
    this.formEnviado = false;
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
