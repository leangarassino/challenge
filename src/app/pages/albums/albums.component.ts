import { Component, OnInit, Input } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  constructor(private RestService:RestService, private router:Router) { }
  public listAlbums:any = [];
  ngOnInit(): void {
  this.cargarData();
  }
  public cargarData(){
    this.RestService.get(`https://jsonplaceholder.typicode.com/albums`)
    .subscribe(respuesta => {
      this.listAlbums = respuesta;
      console.log(this.listAlbums)
    })
  }
  detalleAlbum(id:number){
    this.router.navigate(['albums', id])
  }
}
