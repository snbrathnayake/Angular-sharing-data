import { Component, OnInit , ViewChild ,AfterViewInit } from '@angular/core';
import { ChildAppComponent } from '../child-app/child-app.component';

@Component({
  selector: 'app-grand',
  templateUrl: './grand.component.html',
  styleUrls: ['./grand.component.css']
})
export class GrandComponent implements OnInit ,AfterViewInit {

  
  private messageChild: string;
  private ready: boolean;
  private lang:string [];
  private testdata:string;
  readyChild: boolean = false;
  // access child properties
  @ViewChild(ChildAppComponent) child;

  constructor() { }

  ngAfterViewInit() {
    this.testdata = this.child.childName;

    console.log(this.child.childName);
    console.log(this.child.hello());
  }
  
  ngOnInit() {
    this.ready = true;
  }

  public receiveMessage($event){
    this.messageChild = $event;
  }

  public receiveProgrames($event){
    this.lang = $event;
  }


}
