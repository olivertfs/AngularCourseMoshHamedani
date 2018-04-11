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
  text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo laudantium reprehenderit consequatur pariatur beatae
  illum nisi ullam eum repudiandae ducimus, eligendi sint minima officia et dolorem, enim deleniti rerum id eaque! Excepturi
  assumenda aliquid, eum deserunt nihil voluptate laboriosam, natus soluta omnis itaque necessitatibus vitae veniam nulla
  fugit distinctio porro accusamus fugiat earum obcaecati rerum dolorum officiis reiciendis modi veritatis? Numquam ipsa
  perferendis fugiat, sunt, esse ad natus incidunt quibusdam odit eaque laboriosam ducimus magni fuga aut dolorem. Quia,
  vel quas modi aspernatur delectus nobis recusandae itaque aut quisquam harum, aperiam sunt aliquam illum repellat? Commodi
  ab non vitae!`;

  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };

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
