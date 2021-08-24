import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { PostComponent } from './post/post.component';
import { TodoComponent } from './todo/todo.component';
import { SharedModule } from '../components/shared/shared.module';
import { DetalleAlbumComponent } from './detalle-album/detalle-album.component';
import { DetallepostComponent } from './detallepost/detallepost.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { DetalletodoComponent } from './detalletodo/detalletodo.component';
import { DetalleuserComponent } from './detalleuser/detalleuser.component';




@NgModule({
  declarations: [
    AlbumComponent,
    PostComponent,
    TodoComponent,
    DetalleAlbumComponent,
    DetallepostComponent,
    ComentariosComponent,
    DetalletodoComponent,
    DetalleuserComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
