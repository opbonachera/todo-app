import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  ngOnInit(){}

  toggleAddTask():void{
    // this.showAddTask = !this.showAddTask;
    // this.subject.next(this.showAddTask);
    // console.log(this.showAddTask)
  }

  // Call this function when the add button is clicked.

  // onToggle(): {
  //   // return this.subject.asObservable();
  //   // console.log(this.showAddTask);
  // }
  // Suscribe to this.subject
}
