import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {RestService} from '../../rest.service'
import {Location} from '@angular/common'


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  constructor(private activatedrouter: ActivatedRoute, private router:Router, private api:RestService, private location:Location) { }
  public allComments: any = [];
  ngOnInit(): void {
    let postId = this.activatedrouter.snapshot.paramMap.get('id');
    this.api.getComments(postId).subscribe(data => {
      this.allComments = data;
      console.log(this.allComments);
  })
  }
  volver(){
    this.location.back()
  }
}
