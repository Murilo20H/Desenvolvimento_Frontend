import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/views/login/login.component';
import { CadastroComponent } from './components/views/cadastro/cadastro.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AdicionarProdutoComponent } from './components/views/produto/adicionar-produto/adicionar-produto.component';
import { ListagemProdutosComponent } from './components/views/produto/listagem-produtos/listagem-produtos.component';
import { HomeComponent } from './components/views/home/home.component';
import { SubMenuComponent } from './components/shared/sub-menu/sub-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListagemProdutosComponent,
    AdicionarProdutoComponent,
    NavbarComponent,
    CadastroComponent,
    LoginComponent,
    SubMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
