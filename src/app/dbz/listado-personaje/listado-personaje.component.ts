import { Component, Input, OnInit } from '@angular/core';
import { Personajes } from '../models/Personaje';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-listado-personaje',
  templateUrl: './listado-personaje.component.html',
})
export class ListadoPersonajeComponent implements OnInit {


  @Input() personajes:Personajes[] = []

  constructor(private personajesService:DbzService) {  }

  ngOnInit(): void {
    this.personajes = this.personajesService.listaPersonajes;
  }

}
