import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  tittle:string;
  name:string;
  edad:number;

  constructor() {
    this.tittle = 'Heore App';
    this.name = 'Ironman';
    this.edad = 45;
   }

  ngOnInit(): void {
  
  }

  set nameHeroe(name:string){
    this.name = name
  }

  set edadHeroe(edad:number){
    this.edad = edad
  }

  get nameHeroe():string{
    return this.name
  }

  get edadHeroe():number{
    return this.edad
  }

  nameCapitalizado():string{
    return this.nameHeroe.toUpperCase();
  }
}
