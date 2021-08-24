import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private activatedrouter: ActivatedRoute, private router:Router , private service: RestService, private location:Location) { }
  public datosPost: any = []; 
  ngOnInit(): void {
    let postId = this.activatedrouter.snapshot.paramMap.get('id');
    this.service.getSingleUserPost(postId).subscribe(data => {
      this.datosPost = data;
      console.log(this.datosPost);
    })
  }
  volverUsuarios(){
    this.location.back();
  }

}
