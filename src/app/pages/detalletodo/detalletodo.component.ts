import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-detalletodo',
  templateUrl: './detalletodo.component.html',
  styleUrls: ['./detalletodo.component.css']
})
export class DetalletodoComponent implements OnInit {

  constructor(private activatedrouter: ActivatedRoute, private router:Router, private api:RestService) { }
  public detalleTodo: any = {};
  ngOnInit(): void {
    let todoId = this.activatedrouter.snapshot.paramMap.get('id');
    this.api.getSingleTodo(todoId).subscribe(data => {
      this.detalleTodo = data;
      console.log(this.detalleTodo)
    })
  }
  volver(){
    this.router.navigate(['todos'])
  }
}
