import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
// Child component of task-component

export class TaskItemComponent {
  @Input() task: Task | any;
  // Accepts a Task from the parent (task component)
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter;
  // Sends data to the parent. In this case, it will fire an event.
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter; 

  faTimes =  faTimes; 

  constructor(){};

  ngOnInit(){};

  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task:Task){
    this.onToggleReminder.emit(task);
  }
}
