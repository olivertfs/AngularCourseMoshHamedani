import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
courses = [1, 2, 3];
viewMode = 'map';
otherCourses = [
  {id: 1, name: 'course1'},
  {id: 2, name: 'course2'},
  {id: 3, name: 'course3'}
];
anotherCourses = [];
isSelected = true;
canSave = true;
task = {
  title: 'Review applications',
  assigneeLevel1: {
    name: 'John Smith'
  },
  assigneeLevel2: null
};

  constructor() { }

  ngOnInit() {
  }

  areCoursesAvailable(): boolean {
    return this.courses.length > 0;
  }

  onAdd() {
    this.otherCourses.push({id: 4, name: 'course4'});
  }

  onRemove(course) {
    const index = this.otherCourses.indexOf(course);
    this.otherCourses.splice(index, 1);
  }

  onChange(course) {
    course.name += ' UPDATE';
  }

  loadCourses() {
    this.anotherCourses = [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'}
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  onClick() {
    this.isSelected = !this.isSelected;
  }

}
