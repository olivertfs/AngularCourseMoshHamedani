import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
courses = [1, 2, 3];

  constructor() { }

  ngOnInit() {
  }

  areCoursesAvailable(): boolean {
    return this.courses.length > 0;
  }

}
