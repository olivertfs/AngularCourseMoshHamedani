import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  isFavourite: boolean;

  constructor() {
    this.isFavourite = false;
  }

  ngOnInit() {
  }

  onFavourite() {
    this.isFavourite = !this.isFavourite;
  }

}
