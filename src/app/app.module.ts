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
import { ArticleComponent } from './components/article/article.component';
import { TitlecaseComponent } from './components/titlecase/titlecase.component';
import { TitlecasePipe } from './pipes/titlecase.pipe';
import { ReusableComponent } from './components/reusable/reusable.component';
import { PanelComponent } from './components/panel/panel.component';
import { LikeComponent } from './components/like/like.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { ZippyComponent } from './components/zippy/zippy.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

const appRoutes: Routes = [
  { path: '', component: CourseComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'titlecase', component: TitlecaseComponent },
  { path: 'reusable', component: ReusableComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'zippy', component: ZippyComponent },
  { path: 'contact-form', component: ContactFormComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavouriteComponent,
    TodoComponent,
    ArticleComponent,
    TitlecaseComponent,
    TitlecasePipe,
    ReusableComponent,
    PanelComponent,
    LikeComponent,
    DirectiveComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent
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
