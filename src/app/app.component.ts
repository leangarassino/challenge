import { Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = "challenge"
  constructor() { }
  ngOnInit(): void {
  
  }
}
