import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];

  constructor(private service: TodoService) {
    this.service.getToDos().subscribe((todos) =>
      this.todos = todos);
  }

  ngOnInit() {
  }

  onCompleted(todo) {
    todo.completed = !todo.completed;
  }

}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
