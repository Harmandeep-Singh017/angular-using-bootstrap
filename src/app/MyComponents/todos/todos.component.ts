import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { NgFor } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[] = [
      {
        sno: 1,
        title: "This is title 1",
        desc: "Description",
        active: true
      },
      {
        sno: 2,
        title: "This is title 2",
        desc: "Description",
        active: true
      },
      {
        sno: 3,
        title: "This is title 3",
        desc: "Description",
        active: true
      },
    ]
}
