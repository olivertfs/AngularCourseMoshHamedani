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

  constructor(service: CourseService) {
    this.courses = service.getCourses();
  }
  ngOnInit() {
  }

}
