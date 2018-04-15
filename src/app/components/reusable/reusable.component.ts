import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css']
})
export class ReusableComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('is-favorite') isSelected: boolean;
  // tslint:disable-next-line:no-output-rename
  @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit(this.isSelected);
  }

}
