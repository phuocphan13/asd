import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { FilmOnlineService } from 'src/app/core/services/film-online.service';

@Component({
  selector: 'app-carousel-film',
  templateUrl: './carousel-film.component.html',
  styleUrls: ['./carousel-film.component.scss']
})
export class CarouselFilmComponent implements OnInit {

  listFilmOnlines: any;
  listShowingIndex = [0, 1, 2, 3, 4];
  listShowingFilmOnlines: [];

  title = "HOTEST FILM";

  constructor(private filmOnlineService: FilmOnlineService) { }

  ngOnInit() {
    this.filmOnlineService.getAll().subscribe(result => {
      this.listFilmOnlines = result;
      this.getListShowingFilmOnline();
    });
  }

  onClickButtonRight() {
    this.reShowingFilm(1);
  }

  onClickButtonLeft() {
    this.reShowingFilm(-1);
  }

  private reShowingFilm(index: number) {
    let maximumLength = this.listFilmOnlines.length;
    this.listShowingIndex = this.listShowingIndex.map(x => {
      x += index;
      if (x === maximumLength) {
        return 0
      }
      if (x === - 1) {
        return (maximumLength - 1);
      }
      return x;
    });
    this.getListShowingFilmOnline();
  }

  private getListShowingFilmOnline() {
    this.listShowingFilmOnlines = [];
    this.listShowingIndex.forEach(element => {
      let filmOnline = this.listFilmOnlines.find(x => x.index === element) as never;
      this.listShowingFilmOnlines.push(filmOnline);
    });
  }
}