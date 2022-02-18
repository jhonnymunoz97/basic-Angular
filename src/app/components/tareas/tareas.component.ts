import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  title:string;
  tareas:string[];
  tarea:string;
  flag:boolean;
  btn_txt:string;
  index:number = 0;

  constructor() { 
    this.title = 'Tareas App';
    this.tareas = [];
    this.tarea = '';
    this.flag = false;
    this.btn_txt = 'Añadir Tarea';
  }

  ngOnInit(): void {}

  addTarea(tarea:string,index?:any):void{
    if(tarea.length<1){
      alert('La tarea no puede estar vacía');
    }else if(!this.flag){
      this.tareas.push(tarea);
    }else{
      this.tareas[this.index]=tarea;
      this.flag = false;
      this.btn_txt = 'Añadir Tarea';
    } 
    this.tarea = '';
  }

  mensaje(event:any):void{
    this.addTarea(event.target.value);
  }

  editarTarea(index:number){
    this.tarea = '';
    this.flag = true;
    this.tarea = this.tareas[index];
    this.index = index;
    this.btn_txt = 'Editando Tarea';
  }

  eliminarTarea(index:number){
    this.tareas.splice(index,1)
  }


}
