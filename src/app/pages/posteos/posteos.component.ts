import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-posteos',
  templateUrl: './posteos.component.html',
  styleUrls: ['./posteos.component.css']
})
export class PosteosComponent implements OnInit {
  constructor(private RestService:RestService, private router:Router) { }
  public listPosteos:any = [];
  ngOnInit(): void {
  this.cargarData();
  }
  public cargarData(){
    this.RestService.get(`https://jsonplaceholder.typicode.com/posts`)
    .subscribe(respuesta => {
      this.listPosteos = respuesta;
      console.log(this.listPosteos)
    })
  }
  detallePost(id:number){
    this.router.navigate(['posteos', id])
  }
}
