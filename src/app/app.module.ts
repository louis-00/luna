import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from "./app.routes";

//Servicios
import { BazaresService } from "./services/bazares.service";

//Componentes 
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { BazaresComponent } from './components/bazares/bazares.component';
import { BazarComponent } from './components/bazar/bazar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { BazarCardComponent } from './components/bazar-card/bazar-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AcercaComponent,
    BazaresComponent,
    BazarComponent,
    BuscadorComponent,
    BazarCardComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    BazaresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
