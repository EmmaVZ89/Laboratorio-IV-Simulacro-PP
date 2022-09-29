import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class EntidadesService {
  constructor(private angularFirestore: AngularFirestore) {}

  traerActores() {
    const collection = this.angularFirestore.collection<any>('actores');
    return collection.valueChanges();
  }

  crearActor(actor: any) {
    const act = {
      id: actor.id,
      nombre: actor.nombre,
      apellido: actor.apellido,
      edad: actor.edad,
      sexo: actor.sexo,
      pais: actor.pais,
      nombrePais: actor.nombrePais,
      banderaPais: actor.banderaPais,
    };

    this.angularFirestore.collection<any>('actores').add(act);
  }

  traerImagenesPeliculas() {
    const imagenes = [
      '../../assets/pelicula_1.jpg',
      '../../assets/pelicula_2.jpg',
      '../../assets/pelicula_3.jpg',
      '../../assets/pelicula_4.jpg',
      '../../assets/pelicula_5.jpg',
      '../../assets/pelicula_6.jpg',
      '../../assets/pelicula_7.jpg',
      '../../assets/pelicula_8.jpg',
      '../../assets/pelicula_9.jpg',
      '../../assets/pelicula_10.jpg',
    ];
    return imagenes;
  }

  traerPeliculas() {
    const collection = this.angularFirestore.collection<any>('peliculas');
    return collection.valueChanges();
  }

  crearPelicula(pelicula: any) {
    const pel = {
      id: pelicula.id,
      nombre: pelicula.nombre,
      tipo: pelicula.tipo,
      fechaEstreno: pelicula.fechaEstreno,
      cantidadPublico: pelicula.cantidadPublico,
      fotoPelicula: pelicula.fotoPelicula,
      actor: pelicula.actor,
    };

    this.angularFirestore.collection<any>('peliculas').add(pel);
  }
}
