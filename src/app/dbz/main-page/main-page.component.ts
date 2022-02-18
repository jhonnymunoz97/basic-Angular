import { Component, OnInit } from '@angular/core';
import { Personajes } from '../models/Personaje';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  personajes: Personajes[] = [];
  
  personaje:Personajes={
    nombre:'Escriba nuevo personaje',
    poder:0
  }

  constructor(private bdz_service:DbzService) { }

  
  ngOnInit(): void {
  }

  agregarPersonaje(personaje:any){
    this.personajes.push(personaje)   
  }
}
