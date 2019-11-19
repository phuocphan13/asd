import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchModel } from 'src/app/core/model/search.model';
import { Router } from '@angular/router';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { SearchDataModel } from 'src/app/core/model/payment/search-data.model';
import { MovieService } from 'src/app/core/services/movie.service';

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
  listData: SearchDataModel;
  pickedMovie: any;
  pickedCinema: any;


  listMovies: any = [

  ];
  listCinemas: any = [

  ];

  constructor(private router: Router, private movieService: MovieService) {
    this.minDate = new Date();
    this.searchItem = new SearchModel();
    this.searchItemTemp = new SearchModel();
    this.listData = new SearchDataModel();
  }

  ngOnInit() {
    this.movieService.getListData().subscribe(result =>{
      this.listData.listTheater=result.listCinema
      this.listData.listMovie=result.listMovie
      console.log(this.listData);
    });
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
          console.log(this.searchItem);
        this.searchData.emit(this.searchItem);
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
