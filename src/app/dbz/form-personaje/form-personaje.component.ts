import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personajes } from '../models/Personaje';

@Component({
  selector: 'app-form-personaje',
  templateUrl: './form-personaje.component.html',
  styleUrls: ['./form-personaje.component.scss']
})
export class FormPersonajeComponent implements OnInit {

  @Input() personaje:Personajes={
    nombre:'',
    poder:0
  }

  @Output() newPersonaje:EventEmitter<Personajes> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  agregar(){
    if(this.personaje.nombre.trim().length < 1){
      alert("El nombre del personaje está vacío");
    }else{
      this.newPersonaje.emit(this.personaje);
      this.personaje = {
        nombre:'',
        poder:0
      }
    }
  }

}
