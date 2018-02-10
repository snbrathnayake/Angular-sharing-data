import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-child-app',
  templateUrl: './child-app.component.html',
  styleUrls: ['./child-app.component.css']
})
export class ChildAppComponent implements OnInit {

  private static visit: any = 0;

  constructor(private routes: Router) {
    ChildAppComponent.visit++;
    console.warn('ChildApp:visited = ' + ChildAppComponent.visit);
  }

  ngOnInit() {
    console.info('ChildApp:show');
  }
  back() {
    this.routes.navigate(['/root']);
  }

}
