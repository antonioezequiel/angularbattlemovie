import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/pages/home/home.component';
import { MessagesComponent } from './componentes/messages/messages.component';
import { NewPlayComponent } from './componentes/pages/new-play/new-play.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/pages/login/login.component';
import { IniciarComponent } from './componentes/pages/iniciar/iniciar.component';
import { SortearComponent } from './componentes/pages/sortear/sortear.component';
import { CreateUserComponent } from './componentes/pages/create-user/create-user.component';
import { PageNotFoundComponent } from './componentes/pages/erro/page-not-found/page-not-found.component';
import { LoadButtonComponent } from './componentes/pages/load-button/load-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MessagesComponent,
    NewPlayComponent,
    LoginComponent,
    IniciarComponent,
    SortearComponent,
    CreateUserComponent,
    PageNotFoundComponent,
    LoadButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
