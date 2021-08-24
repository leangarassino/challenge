import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from '../../rest.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  

  constructor(private activatedrouter: ActivatedRoute, private router: Router, private api:RestService, private location:Location) { }

  public datosAlbum: any = [];
  ngOnInit(): void {
    let albumId = this.activatedrouter.snapshot.paramMap.get('id');
    this.api.getSingleUserAlbum(albumId).subscribe(data => {
      this.datosAlbum = data;
      console.log(this.datosAlbum)
    })
  }
  volverUsuarios(){
    this.location.back();
  }

}
