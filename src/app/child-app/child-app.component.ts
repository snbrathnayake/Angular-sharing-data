import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '@angular/router/src/config';
import { DataService } from '../shared/data.service';



@Component({
  selector: 'app-child-app',
  templateUrl: './child-app.component.html',
  styleUrls: ['./child-app.component.css']
})
export class ChildAppComponent implements OnInit {
 
  static attempt: number = 1;
  

  @Input() message: string;
  @Input() datetime: Data;
  @Input() description: string;
  @Input() isReadyParent: boolean = false;
  @Input() isReadyGrand: boolean = false;
  @Input() titleInput: string;

  @Output() messageEvent = new EventEmitter<string>();
  @Output() file = new EventEmitter<string[]>();

  private programes:string[];
  public childName:string = 'SAMEERA';
  private behaviourMsg;
  readyChild: boolean = true;

  constructor(private _data:DataService) {
  
  }

  ngOnInit() {
    // this.childName = 'SAMEERA';

    this.programes = ['java','PHP','C#','Angular 5'];
    this._data.currentMessage.subscribe(message => {
      this.behaviourMsg = message;
    });
    
  }


  get readyParent(){
    return this.isReadyParent;
  }
  get readyGrand(){
    return this.isReadyGrand;
  }

  public sendMessage(){
    this.messageEvent.emit('HYE ! Grand Father this coming from child app');
  }

  public sendProgrames(){
    this.file.emit(this.programes);
  }

  public hello(): string{
    return 'Hello Angualar'
  }

  public newMessage(): void{

    this._data.changeMessage(ChildAppComponent.attempt ++);
  }
}
