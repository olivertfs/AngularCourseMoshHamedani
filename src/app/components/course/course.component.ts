import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = 'List of courses';
  courses;
  imageUrl = 'http://lorempixel.com/400/200/';
  isActive: boolean;
  email = 'nedbleg@gmail.com';

  constructor(service: CourseService) {
    this.courses = service.getCourses();
    this.isActive = false;
  }
  ngOnInit() {
  }

  onSave($event) {
    // using this method will stop events bubbling up the dom hierarchy
    $event.stopPropagation();
    alert('Button was clicked!');
    console.log($event);
  }

  onKeyUp($event, userName) {
    if ($event.keyCode === 13) {
      console.log('Enter was pressed');
      console.log($event.target.value);
      console.log(userName + ' template variable');
    }
  }

  onKeyUpAngularEnterStyle($event, email) {
    console.log('Enter was pressed, Angular Style');
    console.log($event.target.value + ' from Angular Style');
    console.log(email + ' template variable');
  }

  onKeyUpTwoWayBinding() {
    console.log(this.email);
  }

}
