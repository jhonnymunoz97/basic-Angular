import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  tittle:string;
  contador:number;

  constructor() { 
    this.tittle = 'Contador App';
    this.contador = 0;
  }

  ngOnInit(): void {
  }

  aumentarContador(){
    this.contador+=1;
  }

  disminuirContador(){
    this.contador-=1;
  }

}
