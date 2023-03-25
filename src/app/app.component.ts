import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'to-do';
  quote = "Dashboard"; 
  today:Date | undefined;
  tasks = [
    "task 1",
    "task 2",
    "task 3",
    "task 4",
    "task 5",
    "task 6",
    
    
    
  ]
  


  constructor() {
    this.today = new Date();
  }
  editTask(){

  }
  deleteTask(){

  }
}
