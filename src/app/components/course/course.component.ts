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

  constructor(service: CourseService) {
    this.courses = service.getCourses();
  }
  ngOnInit() {
  }

}
