import { Component, OnInit } from '@angular/core';
import { Personajes } from '../models/Personaje';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  
  personaje:Personajes={
    nombre:'Nuevo Personaje',
    poder:0
  }

  get personajesDBZ():Personajes[]{
    return this.personajeService.listaPersonajes;
  }

  constructor(private personajeService:DbzService) { }
  

  ngOnInit(): void {
  }

}
