import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { ListadoPersonajeComponent } from './listado-personaje/listado-personaje.component';
import { FormPersonajeComponent } from './form-personaje/form-personaje.component';
import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    ListadoPersonajeComponent,
    FormPersonajeComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    DbzService,
  ]
})
export class DbzModule { }
