import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
@Input('isLiked') isLiked: boolean;
@Input('likesCount') likesCount: number;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isLiked = !this.isLiked;

    this.likesCount += (this.isLiked) ? 1 : -1;
  }

}
