import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { MovieService } from 'src/app/core/services/movie.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/core/services/shared.service';
import { SearchMovieSharedService } from 'src/app/core/services/search-movie-shared.service';

@Component({
  selector: 'app-offline-movie-search-view',
  templateUrl: './offline-movie-search-view.component.html',
  styleUrls: ['./offline-movie-search-view.component.scss']
})
export class OfflineMovieSearchViewComponent implements OnInit {

  listMovies: any = []

  constructor(private router: Router,
    private movieService: MovieService,
    private searchMovieSharedService: SearchMovieSharedService) { }

  ngOnInit() {
  }

  outputData(event) {
    this.movieService.getListMovies(event).subscribe(result => {
      this.listMovies = [];
      this.listMovies.push(result);
      console.log(this.listMovies);
    });

  }

  getBookingItem(event){
    if(event){
      localStorage.setItem("paymentStatus", "1");
      this.router.navigateByUrl("payment/booking");
    }
  }
}
