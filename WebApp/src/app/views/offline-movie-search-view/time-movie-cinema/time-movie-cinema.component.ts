import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchModel } from 'src/app/core/model/search.model';
import { Router } from '@angular/router';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { SearchMovieSharedService } from 'src/app/core/services/search-movie-shared.service';

@Component({
  selector: 'app-time-movie-cinema',
  templateUrl: './time-movie-cinema.component.html',
  styleUrls: ['./time-movie-cinema.component.scss']
})
export class TimeMovieCinemaComponent implements OnInit {

  @Output() searchData = new EventEmitter();

  searchItem: SearchModel;
  searchItemTemp: SearchModel;
  minDate: Date;
  date: any;
  movieId: any;
  cinemaId: any;

  pickedMovie: any;
  pickedCinema: any;


  listMovies: any = [
    { id: 1, name: 'NGÔI NHÀ BƯƠM BƯỚM' },
    { id: 2, name: 'BẠN HỌC CÕI ÂM' },
    { id: 3, name: 'ANH THẦY NGÔI SAO' },
    { id: 4, name: 'ANGRY BIRDS 2' },
  ];
  listCinemas: any = [
    { id: 1, name: 'BHD Star Bitexco' },
    { id: 2, name: 'BHD Star Vincom Thảo Điền' },
    { id: 3, name: 'GLX - Nguyễn Du' },
    { id: 4, name: 'GLX - Tân Bình' },
  ];

  constructor(private router: Router,
    private searchMovieSharedService:SearchMovieSharedService) {
    this.minDate = new Date();
    this.searchItem = new SearchModel();
    this.searchItemTemp = new SearchModel();
  }

  ngOnInit() {

  }

  onClickSearch() {
    if (this.pickedCinema && this.date && this.pickedMovie) {
      this.searchItem.movieId = this.movieId;
      this.searchItem.cinemaId = this.cinemaId;
      this.searchItem.date = this.date;
      // console.log(this.date);
      //1

      if (this.searchItem.date != this.searchItemTemp.date
        || this.searchItem.movieId != this.searchItemTemp.movieId
        || this.searchItem.cinemaId != this.searchItemTemp.cinemaId) {
        this.searchData.emit(this.searchItem);
        this.searchMovieSharedService.set(this.searchItem);
        console.log(this.searchItem);
      }

      //2
      this.searchItemTemp = this.searchItem;

      //3
      this.searchItem = new SearchModel();
      // console.log(this.searchItemTemp);
    }
    else {
      alert("field missing");
    }
  }
}
