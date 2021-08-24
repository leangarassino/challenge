import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  constructor(private RestService:RestService, private router:Router) { }
  public listUsers:any = [];
  ngOnInit(): void {
  this.cargarData();
  }
  public cargarData(){
    this.RestService.get(`https://jsonplaceholder.typicode.com/users`)
    .subscribe(respuesta => {
      this.listUsers = respuesta;
      console.log(this.listUsers)
    })
  }
  postUsers(id:number){
    this.router.navigate(['users', id , 'post'])
  }
  albumUsers(id:number){
    this.router.navigate(['users', id , 'album'])
  }
  todoUsers(id:number){
    this.router.navigate(['users', id , 'todo'])
  }
  detalleUser(id:number){
    this.router.navigate(['users', id])
  }
}
