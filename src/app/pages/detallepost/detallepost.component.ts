import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-detallepost',
  templateUrl: './detallepost.component.html',
  styleUrls: ['./detallepost.component.css']
})
export class DetallepostComponent implements OnInit {

  constructor(private activatedrouter: ActivatedRoute, private router:Router, private api:RestService) { }
  public detallePost: any = {};
  ngOnInit(): void {
    let postId = this.activatedrouter.snapshot.paramMap.get('id');
    this.api.getSinglePost(postId).subscribe(data => {
      this.detallePost = data;
      console.log(this.detallePost)
    })
  }
  volver(){
    this.router.navigate(['posteos'])
  }
  postComments(id:number){
    this.router.navigate(['posts', id , 'comments'])
  }
  detalleUser(id:number){
    this.router.navigate(['users', id])
  }
}
