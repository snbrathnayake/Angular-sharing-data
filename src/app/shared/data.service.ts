import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject<number>(2);
  public currentMessage = this.messageSource.asObservable();

  constructor() { }

  public changeMessage(message: number) {
    this.messageSource.next(message);
  }
}
