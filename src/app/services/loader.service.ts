


import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BlockUI, NgBlockUI } from 'ng-block-ui';



@Injectable({
  providedIn: 'root'
})



export class LoaderService {
  @BlockUI() blockUI: NgBlockUI;
  // private loaderSubject = new Subject<LoaderState>();
  // loaderState = this.loaderSubject.asObservable();
  constructor() { }
  show() {
    // this.loaderSubject.next(<LoaderState>{ show: true });
    this.blockUI.start('Loading...')
  }
  hide() {
    this.blockUI.stop();
    // this.loaderSubject.next(<LoaderState>{ show: false });
  }
}