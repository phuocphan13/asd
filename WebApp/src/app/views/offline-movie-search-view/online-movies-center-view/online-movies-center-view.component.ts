import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemShowingEnum } from 'src/app/core/enum/item-showing.enum';
import { SearchMovieSharedService } from 'src/app/core/services/search-movie-shared.service';
import { SearchModel } from 'src/app/core/model/search.model';

@Component({
  selector: 'app-online-movies-center-view',
  templateUrl: './online-movies-center-view.component.html',
  styleUrls: ['./online-movies-center-view.component.scss']
})
export class OnlineMoviesCenterViewComponent implements OnInit {
  @Input("data") listMovie: any;
  @Output() bookingMovieItem = new EventEmitter();
  type = ItemShowingEnum.Movie;
  searchItemTemp: SearchModel;
  
  constructor(private searchMovieSharedService: SearchMovieSharedService) { 
    // this.searchItemTemp = new SearchModel();
  }

  ngOnInit() {
    // this.searchItemTemp = this.searchMovieSharedService.get();
    // console.log(this.searchItemTemp);
  }

  ngOnchange() {

  }


  getBookingItem(event) {
    this.bookingMovieItem.emit(event);
  }
}
