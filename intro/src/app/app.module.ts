import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { TerrorComponent } from './components/terror/terror.component';
import { TdetallesComponent } from './components/tdetalles/tdetalles.component';
import { FiccionComponent } from './components/ficcion/ficcion.component';
import { FdetallesComponent } from './components/fdetalles/fdetalles.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    NavComponent,
    FooterComponent,
    TerrorComponent,
    TdetallesComponent,
    FiccionComponent,
    FdetallesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
