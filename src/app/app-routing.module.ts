import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './pages/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './pages/actor-listado/actor-listado.component';
import { ActorPeliculaComponent } from './pages/actor-pelicula/actor-pelicula.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './pages/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './pages/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  { path: 'bienvenido', component: BienvenidaComponent },
  { path: '', component: BusquedaComponent },
  { path: 'peliculas/alta', component: PeliculaAltaComponent },
  { path: 'peliculas/listado', component: PeliculaListadoComponent },
  { path: 'actor/alta', component: ActorAltaComponent },
  { path: 'actor/listado', component: ActorListadoComponent },
  { path: 'actor/actorpelicula', component: ActorPeliculaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
