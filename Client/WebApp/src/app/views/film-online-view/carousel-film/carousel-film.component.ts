import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { FilmOnlineService } from 'src/app/core/services/film-online.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-carousel-film',
  templateUrl: './carousel-film.component.html',
  styleUrls: ['./carousel-film.component.scss']
})
export class CarouselFilmComponent implements OnInit {

  listFilmOnlines: any;
  listShowingIndex = [0, 1, 2, 3, 4];

  widthOfFilm = 278;
  filmLeftPosition = "0px";
  leftNumberValue = 0;
  maxLeftValue = 0;
  minLeftValue = -834;
  numberOfSlideFilms = 3;

  title = "HOTEST FILM";

  constructor(private filmOnlineService: FilmOnlineService,
    private authService: AuthService) { }

  ngOnInit() {
    this.filmOnlineService.getListFilmsCarousel().subscribe(result => {
      this.listFilmOnlines = result;
    });
  }

  onClickButtonRight() {
    if (this.leftNumberValue > this.minLeftValue) {
      this.leftNumberValue -= this.widthOfFilm * this.numberOfSlideFilms;
      this.filmLeftPosition = `${this.leftNumberValue}px`;
    }
  }

  onClickButtonLeft() {
    if (this.leftNumberValue < this.maxLeftValue) {
      this.leftNumberValue += this.widthOfFilm * this.numberOfSlideFilms;
      this.filmLeftPosition = `${this.leftNumberValue}px`;
    }
  }

  // private reShowingFilm(index: number) {
  //   let maximumLength = this.listFilmOnlines.length;
  //   this.listShowingIndex = this.listShowingIndex.map(x => {
  //     x += index;
  //     if (x === maximumLength) {
  //       return 0
  //     }
  //     if (x === - 1) {
  //       return (maximumLength - 1);
  //     }
  //     return x;
  //   });
  //   this.getListShowingFilmOnline();
  // }

  // private getListShowingFilmOnline() {
  //   this.listShowingFilmOnlines = [];
  //   this.listShowingIndex.forEach(element => {
  //     let filmOnline = this.listFilmOnlines.find(x => x.index === element) as never;
  //     this.listShowingFilmOnlines.push(filmOnline);
  //   });
  // }
}
