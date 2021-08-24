import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {RestService} from '../../rest.service'
import {Location} from '@angular/common'

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor( private router: Router, private activatedrouter: ActivatedRoute, private api: RestService, private location:Location) { }
  public allPhotos: any = [];
  ngOnInit(): void {
    let photosId = this.activatedrouter.snapshot.paramMap.get('id')
    this.api.getPhotos(photosId).subscribe(data => {
      this.allPhotos = data;
      console.log(this.allPhotos)
    })
  }
  volverAlbums(){
    this.location.back();
  }
  eliminar(obj: any, id: any){
      this.api.deletePhotos(obj, id).subscribe(data => {
        this.allPhotos = data
      })
  }
}
