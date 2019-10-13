import { Component, OnInit } from '@angular/core';
import { FilmOnlineService } from 'src/app/core/services/film-online.service';

@Component({
  selector: 'app-carousel-film',
  templateUrl: './carousel-film.component.html',
  styleUrls: ['./carousel-film.component.scss']
})
export class CarouselFilmComponent implements OnInit {

  listFilmOnlines: [];

  constructor(private filmOnlineService: FilmOnlineService) { }

  ngOnInit() {
    this.filmOnlineService.getAll().subscribe(result => {
      this.listFilmOnlines = result;
    })
  }

  onSlideRangeChange(indexes: number[]): void {
    
  }
}
