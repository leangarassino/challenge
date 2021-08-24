import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './pages/album/album.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { HomeComponent } from './pages/home/home.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { PostComponent } from './pages/post/post.component';
import { PosteosComponent } from './pages/posteos/posteos.component';
import { TodoComponent } from './pages/todo/todo.component';
import { TodosComponent } from './pages/todos/todos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { DetalleAlbumComponent} from './pages/detalle-album/detalle-album.component'
import { DetallepostComponent } from './pages/detallepost/detallepost.component';
import { ComentariosComponent } from './pages/comentarios/comentarios.component';
import { DetalletodoComponent } from './pages/detalletodo/detalletodo.component';
import { DetalleuserComponent } from './pages/detalleuser/detalleuser.component';

const routes: Routes = [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'usuarios',
        component: UsuariosComponent
      },
      {
        path: 'albums',
        component: AlbumsComponent
      },
      {
        path: 'albums/:id/photos',
        component: PhotosComponent
      },
      {
        path: 'posteos',
        component: PosteosComponent
      },
      {
        path: 'posteos/:id',
        component: DetallepostComponent
      },
      {
        path: 'posts/:id/comments',
        component: ComentariosComponent
      },
      {
        path: 'todos',
        component: TodosComponent
      },
      {
        path: 'todos/:id',
        component: DetalletodoComponent
      },
      {
        path: 'users/:id',
        component: DetalleuserComponent
      },
      {
        path: 'users/:id/post',
        component: PostComponent
      },
      {
        path: 'users/:id/album',
        component: AlbumComponent
      },
      {
        path: 'users/:id/todo',
        component: TodoComponent
      },
      {
        path: 'albums/:id',
        component: DetalleAlbumComponent
      },
    ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
