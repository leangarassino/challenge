import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-detalle-album',
  templateUrl: './detalle-album.component.html',
  styleUrls: ['./detalle-album.component.css']
})
export class DetalleAlbumComponent implements OnInit {

  constructor(private activatedrouter: ActivatedRoute, private router: Router, private api:RestService) { }

  public detalleAlbum: any = {};
  ngOnInit(): void {
    let albumId = this.activatedrouter.snapshot.paramMap.get('id');
    this.api.getSingleAlbum(albumId).subscribe(data => {
      this.detalleAlbum = data;
      console.log(this.detalleAlbum)
    })
  }
  volverAlbums(){
    this.router.navigate(['albums'])
  }
  galeria(id:number){
    this.router.navigate(['albums', id , 'photos'])
  }
  detalleUser(id:number){
    this.router.navigate(['users', id])
  }

}
