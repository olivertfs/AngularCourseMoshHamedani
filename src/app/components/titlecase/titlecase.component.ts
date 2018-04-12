import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlecase',
  templateUrl: './titlecase.component.html',
  styleUrls: ['./titlecase.component.css']
})
export class TitlecaseComponent implements OnInit {
  textTransformed = '';

  constructor() { }

  ngOnInit() {
  }

  onKeyUp($event) {
    const text = $event.target.value;
    this.textTransformed = this.textTransformed.concat(text);
  }

}
