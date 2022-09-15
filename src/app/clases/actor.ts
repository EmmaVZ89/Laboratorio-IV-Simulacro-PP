export class Actor {
  id: number;
  nombre: string;
  apellido: string;
  edad: string;
  sexo: string;
  pais: string;
  fotoPais: string;

  constructor(
    id: number,
    nombre: string,
    apellido: string,
    edad: string,
    sexo: string,
    pais: string,
    fotoPais: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.sexo = sexo;
    this.pais = pais;
    this.fotoPais = fotoPais;
  }
}
