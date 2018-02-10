import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Routes, Router } from '@angular/router';
import { Data } from '@angular/router/src/config';

@Component({
  selector: 'app-parent-app',
  templateUrl: './parent-app.component.html',
  styleUrls: ['./parent-app.component.css']
})
export class ParentAppComponent implements OnInit {

  private msg: string;
  private year: any;
  private ready: boolean;

  constructor() {}

  ngOnInit() {
    console.info('ParentApp:show');
    this.msg = 'Hello sample text from parent.';
    this.year = new Date().getFullYear();
    this.ready = true;
  }


}
