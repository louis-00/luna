
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { BazaresComponent } from "./components/bazares/bazares.component";
import { BazarComponent } from './components/bazar/bazar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'acerca', component: AcercaComponent },
    { path: 'bazares', component: BazaresComponent },
    { path: 'bazar/:id', component: BazarComponent},
    { path: 'buscador/:texto', component: BuscadorComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
