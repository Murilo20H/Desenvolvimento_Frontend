import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemAnimaisComponent } from './components/shared/listagem-animais/listagem-animais.component';
import { HomeComponent } from './components/views/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CadastroComponent } from './components/views/cadastro/cadastro.component';
import { LoginComponent } from './components/views/login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListagemAnimaisComponent,
    HomeComponent,
    NavbarComponent,
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
