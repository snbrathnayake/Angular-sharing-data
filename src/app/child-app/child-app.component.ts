import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '@angular/router/src/config';



@Component({
  selector: 'app-child-app',
  templateUrl: './child-app.component.html',
  styleUrls: ['./child-app.component.css']
})
export class ChildAppComponent implements OnInit {

  @Input() message: string;
  @Input() datetime: Data;
  @Input() isReady: boolean = false;

  constructor() {}

  ngOnInit() {}


  get ready(){
    return this.isReady;
  }

}
