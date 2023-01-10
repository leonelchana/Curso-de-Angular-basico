import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    { nombre: 'goku', poder: 15000 },
    { nombre: 'vegeta', poder: 7500 },
    { nombre: 'krilin', poder: 3000 },
    { nombre: 'freezer', poder: 20000 },
  ];
  get personajes(): Personaje[] {
    return [...this._personajes];
  }
  constructor() {}

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
