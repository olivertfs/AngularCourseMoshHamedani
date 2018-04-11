import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

  constructor(public http: Http) { }

  getToDos() {
    return this.http
    .get('https://jsonplaceholder.typicode.com/todos')
    .map(res => res.json());
  }
}
