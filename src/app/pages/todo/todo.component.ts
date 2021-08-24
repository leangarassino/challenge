import { Component, OnInit } from '@angular/core';
import {RestService} from '../../rest.service'
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute, private router: Router, private api: RestService, private location:Location) { }
  public datosTodo: any = [];
  ngOnInit(): void {
    let todoId = this.activatedroute.snapshot.paramMap.get('id');
    this.api.getSingleUserTodo(todoId).subscribe(data => {
      this.datosTodo = data;
      console.log(this.datosTodo);
    })
  }
  volverUsuarios(){
    this.location.back();
  }

}
