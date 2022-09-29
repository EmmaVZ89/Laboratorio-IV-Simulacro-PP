import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EntidadesService } from 'src/app/services/entidades.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss'],
})
export class ActorAltaComponent implements OnInit {
  actorNuevo: Actor = new Actor(0, '', '', '', '', '', '', '');
  listadoActores: Actor[] = [];
  vistaListado = false;
  textoVistaListado = 'Ver Listado de Actores';
  formEnviado: boolean;

  //@ts-ignore
  forma: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private entidadesService: EntidadesService
  ) {
    this.formEnviado = false;
  }

  ngOnInit(): void {
    this.forma = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      sexo: ['', Validators.required],
      pais: ['', Validators.required],
      nombrePais: ['', Validators.required],
      banderaPais: ['', Validators.required],
    });
    this.entidadesService.traerActores().subscribe((actores) => {
      if (actores != null) {
        this.listadoActores = actores;
      }
    });
  }

  agregarActor($event: Event) {
    // $event.preventDefault();
    this.forma.setValue({
      nombre: this.forma.getRawValue().nombre,
      apellido: this.forma.getRawValue().apellido,
      edad: this.forma.getRawValue().edad,
      sexo: this.forma.getRawValue().sexo,
      pais: this.actorNuevo.pais,
      nombrePais: this.actorNuevo.nombrePais,
      banderaPais: this.actorNuevo.banderaPais,
    });

    if (!this.forma.invalid) {
      this.actorNuevo.nombre = this.forma.getRawValue().nombre;
      this.actorNuevo.apellido = this.forma.getRawValue().apellido;
      this.actorNuevo.edad = this.forma.getRawValue().edad;
      this.actorNuevo.sexo = this.forma.getRawValue().sexo;
      this.entidadesService.crearActor(this.actorNuevo);
      // this.listadoActores.push(this.actorNuevo);
      this.actorNuevo = new Actor(0, '', '', '', '', '', '', '');
      this.forma.reset();
      // console.log(this.listadoActores);
    } else {
      this.formEnviado = true;
    }
  }

  tomarPaisSeleccionado($pais: any) {
    // console.log($event);
    this.actorNuevo.pais = $pais;
    this.actorNuevo.nombrePais = $pais.name.common;
    this.actorNuevo.banderaPais = $pais.flags.png;
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

  // CUSTOM VALIDATOR
  private spacesValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    return spaces ? { containsSpaces: true } : null;
  }
}
