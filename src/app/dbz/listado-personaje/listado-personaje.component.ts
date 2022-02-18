import { Component, Input, OnInit } from '@angular/core';
import { Personajes } from '../models/Personaje';

@Component({
  selector: 'app-listado-personaje',
  templateUrl: './listado-personaje.component.html',
})
export class ListadoPersonajeComponent implements OnInit {


  @Input() personajes:Personajes[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
