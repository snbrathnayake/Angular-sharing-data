import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Sharing Data among the componets';

  constructor(private routes:Router){
    console.warn('AppComponet called ');
  }



}
