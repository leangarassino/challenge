import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-detalleuser',
  templateUrl: './detalleuser.component.html',
  styleUrls: ['./detalleuser.component.css'],
})
export class DetalleuserComponent implements OnInit {
  constructor(
    private activatedrouter: ActivatedRoute,
    private router: Router,
    private api: RestService
  ) {}

  public detalleUser: any = {};
  ngOnInit(): void {
    let userId = this.activatedrouter.snapshot.paramMap.get('id');
    this.api.getSingleUser(userId).subscribe((data) => {
      this.detalleUser = data;
      console.log(this.detalleUser);
    });
  }
  postUsers(id: number) {
    this.router.navigate(['users', id, 'post']);
  }
  albumUsers(id: number) {
    this.router.navigate(['users', id, 'album']);
  }
  todoUsers(id: number) {
    this.router.navigate(['users', id, 'todo']);
  }
  volver(){
    this.router.navigate(['usuarios'])
  }
}
