import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  constructor(private RestService:RestService, private router: Router) { }
  public listTodos:any = [];
  ngOnInit(): void {
  this.cargarData();
  }
  public cargarData(){
    this.RestService.get(`https://jsonplaceholder.typicode.com/todos`)
    .subscribe(respuesta => {
      this.listTodos = respuesta;
      console.log(this.listTodos)
    })
  }
  detalleTodo(id:number){
    this.router.navigate(['todos', id])
  }
}

