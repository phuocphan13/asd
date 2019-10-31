import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemShowingEnum } from 'src/app/core/enum/item-showing.enum';

@Component({
  selector: 'app-online-movies-center-view',
  templateUrl: './online-movies-center-view.component.html',
  styleUrls: ['./online-movies-center-view.component.scss']
})
export class OnlineMoviesCenterViewComponent implements OnInit {
  @Input("data") listMovie: any;
  @Output() bookingMovieItem = new EventEmitter();
  type = ItemShowingEnum.Movie;

  constructor() { }

  ngOnInit() {

  }

  ngOnchange() {

  }

  getBookingItem(event) {
    this.bookingMovieItem.emit(event);
  }
}
