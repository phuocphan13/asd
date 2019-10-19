import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-offline-movie-search-view',
  templateUrl: './offline-movie-search-view.component.html',
  styleUrls: ['./offline-movie-search-view.component.scss']
})
export class OfflineMovieSearchViewComponent implements OnInit {

  listMovies: any = []

  constructor(private menuService: MenuService,
    private movieService: MovieService) { }

  ngOnInit() {
  }

  outputData(event) {
    this.movieService.getListMovies(event).subscribe(result => {
      this.listMovies = [];
      this.listMovies.push(result);
      console.log(this.listMovies);
      //Logic
    });
  }

}
