import { TodoService } from './services/todo.service';
import { Http, HttpModule } from '@angular/http';
import { SummaryPipe } from './pipes/summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { CourseService } from './services/course.service';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { TodoComponent } from './components/todo/todo.component';

const appRoutes: Routes = [
  {path: '', component: CourseComponent},
  {path: 'todo', component: TodoComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavouriteComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CourseService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
