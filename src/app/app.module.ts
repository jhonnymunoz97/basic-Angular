import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { DbzModule } from './dbz/dbz.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroeComponent,
    TareasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PagesModule,
    DbzModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
