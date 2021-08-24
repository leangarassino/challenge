import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { PosteosComponent } from './pages/posteos/posteos.component';
import { AlbumsComponent } from './pages/albums/albums.component';

import { SharedModule } from './components/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { TodosComponent } from './pages/todos/todos.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module'
import { HomeModule } from './pages/home.module'
import { PhotosComponent } from './pages/photos/photos.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    UsuariosComponent,
    PosteosComponent,
    HomeComponent,
    TodosComponent,
    AlbumsComponent,
    HeaderComponent,
    PhotosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ComponentsModule,
    HomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
