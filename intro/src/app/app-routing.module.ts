import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { TerrorComponent } from './components/terror/terror.component';
import { TdetallesComponent } from './components/tdetalles/tdetalles.component';
import { FiccionComponent } from './components/ficcion/ficcion.component';
import { FdetallesComponent } from './components/fdetalles/fdetalles.component';


const routes: Routes = [
  {path:'', component: BienvenidaComponent},
  {path:'nav', component: NavComponent},
  {path:'footer', component: FooterComponent},
  {path:'terror', component: TerrorComponent},
  {path:'tdetalles/:id', component: TdetallesComponent},
  {path:'ficcion', component: FiccionComponent},
  {path:'fdetalles/:id', component: FdetallesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
