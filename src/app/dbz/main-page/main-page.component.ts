import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: 'maestroRoshi',
    poder: 1500,
  };
 
/*   agregarPersonaje(argumento: Personaje) {
    this.personajes.push(argumento);
  } */
  /* inyeccion de dependencia */
  constructor(private dbzService: DbzService) {
    /* this.personajes=this.dbzService.personajes; */
  }
}
