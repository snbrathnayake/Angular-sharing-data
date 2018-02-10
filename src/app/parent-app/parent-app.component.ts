import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-parent-app',
  templateUrl: './parent-app.component.html',
  styleUrls: ['./parent-app.component.css']
})
export class ParentAppComponent implements OnInit {

  constructor(private routes:Router) {
    
   }

  ngOnInit() {
    console.info('ParentApp:show');
  }

  back(){
    this.routes.navigate(['/root']);
  }

}
