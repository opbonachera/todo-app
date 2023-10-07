import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/taskservice.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit{
  tasks: Task[] = [];

  constructor(private taskService: TaskService){}
  
  ngOnInit(): void{
    this.taskService.getTasks().subscribe((tasks)=>{ this.tasks = tasks});   
  }
  // This is the function that runs when the component is first initialized. 
  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(()=>{this.tasks = this.tasks.filter((t)=> t.id !== task.id)});
  }
  // When the event in the child component is fired, this function is executed.
  toggleReminder(task:Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
    // Updates the whole task but only changes the reminder
  }

  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task)=> this.tasks.push(task));
  }
}
