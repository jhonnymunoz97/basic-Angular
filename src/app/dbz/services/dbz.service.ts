import { Injectable } from '@angular/core';
import { Personajes } from '../models/Personaje';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private personajes:Personajes[] = []


  constructor() {  }

  get listaPersonajes():Personajes[]{
    return [...this.personajes];
  }

  addPersonaje(personaje:Personajes){
    this.personajes.push(personaje);
  }


}
