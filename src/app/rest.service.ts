import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userAlbum } from './models/userAlbum.interface';
import { Observable } from 'rxjs';
import { userPost } from './models/userPost.interface';
import { userTodo } from './models/userTodo.interface';
import { Album } from './models/Album.interface'
import { Photos} from './models/Photos.interface'
import { Post} from './models/Post.interface'
import {Comments} from './models/Comments.interface'
import {Todo} from './models/Todo.interface'
import {User} from './models/User.interface'

@Injectable({
  providedIn: 'root',
})
export class RestService {
  @Output() disparadordePosts: EventEmitter<any> = new EventEmitter();
  urlServer: string = 'https://jsonplaceholder.typicode.com/';
  urlLocal: string = 'http://localhost:4200/albums/1/photos'
  constructor(private http: HttpClient) {}
  public get(url: string) {
    return this.http.get(url);
  }
  public getSingle(id: number, url: string) {
    this.get(`${url}/${id}`);
    return this.http.get(`${url}/${id}`);
  }
  getSingleUserAlbum(id: any): Observable<userAlbum> {
    let direccion = this.urlServer + 'users/' + id + '/albums';
    return this.http.get<userAlbum>(direccion);
  }
  getSingleUserPost(id: any): Observable<userPost> {
    let direccion = this.urlServer + 'users/' + id + '/posts';
    return this.http.get<userPost>(direccion);
  }
  getSingleUserTodo(id: any): Observable<userTodo> {
    let direccion = this.urlServer + 'users/' + id + '/todos';
    return this.http.get<userTodo>(direccion);
  }
  getSingleAlbum(id: any): Observable<Album>{
    let direccion = this.urlServer + 'albums/' + id;
    return this.http.get<Album>(direccion);
  }
  getPhotos(id: any): Observable<Photos>{
    let direccion = this.urlServer + 'albums/' + id + '/photos';
    return this.http.get<Photos>(direccion);
  }
  deletePhotos(obj: any, id:any): Observable<Photos>{
    let direccion = this.urlServer + 'photos/' + id ;
    let Options = {headers: new HttpHeaders({
      'content-type': 'application/json',
      body: obj })}
    return this.http.delete<Photos>(direccion, Options);
  }
  getSinglePost(id: any): Observable<Post>{
    let direccion = this.urlServer + 'posts/' + id;
    return this.http.get<Post>(direccion);
  }
  getComments(id: any): Observable<Comments> {
    let direccion = this.urlServer + 'posts/' + id + '/comments';
    return this.http.get<Comments>(direccion);
  }
  getSingleTodo(id: any): Observable<Todo>{
    let direccion = this.urlServer + 'todos/' + id;
    return this.http.get<Todo>(direccion);
  }
  getSingleUser(id: any): Observable<User>{
    let direccion = this.urlServer + 'users/' + id;
    return this.http.get<User>(direccion);
  }

}
