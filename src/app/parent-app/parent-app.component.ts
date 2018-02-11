import { Component, OnInit , Output ,EventEmitter } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Routes, Router } from '@angular/router';
import { Data } from '@angular/router/src/config';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-parent-app',
  templateUrl: './parent-app.component.html',
  styleUrls: ['./parent-app.component.css']
})
export class ParentAppComponent implements OnInit {
  
  behaviourMsg: string;

  private msg: string;
  private year: any;
  private readyParent: boolean;
  private description: string;
  private defaultTitle: string;
  readyChild: boolean = false;

  constructor(private _data:DataService) {}

  ngOnInit() {
    console.info('ParentApp:show');
    
    this.defaultTitle = 'New Title';
    this.msg = 'Hello sample text from parent.';
    this.year = new Date().getFullYear();
    this.readyParent = true;
    this.description = `
    The standard chunk of Lorem Ipsum used since the 1600s is reproduced below for those interested.
     Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
      by Cicero are also reproduced in their exact original form, 
      accompanied by English versions from the 1914 translation by H. Rackham.
    `;

    this._data.currentMessage.subscribe(message => {
      this.behaviourMsg = message;
    });
  }





}
