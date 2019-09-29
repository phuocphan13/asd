import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchModel } from 'src/app/core/model/search.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-time-movie-cinema',
  templateUrl: './time-movie-cinema.component.html',
  styleUrls: ['./time-movie-cinema.component.scss']
})
export class TimeMovieCinemaComponent implements OnInit {

  @Output() searchData = new EventEmitter();

  searchItem: SearchModel;
  minDate: Date;
  date: any;

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
    { id: 2, name: 'GLX - Nguyễn Du' },
    { id: 3, name: 'BHD Star Vincom Thảo Điền' },
    { id: 4, name: 'GLX - Tân Bình' },
  ];

  constructor(private router: Router) {
    this.minDate = new Date();
    this.searchItem = new SearchModel();
  }

  ngOnInit() {

  }


  onChangeMovieName(event) {
    this.searchItem.movieId = event.id;
  }

  onChangeCinemaName(event) {
    this.searchItem.cinemaId = event.id;
  }

  onClickSearch()
  {
    this.router.navigateByUrl('/news')
    // this.searchData.emit(this.searchItem);
  }
}
