import { Component, OnInit } from '@angular/core';
import { FilmOnlineService } from 'src/app/core/services/film-online.service';
import { FilmNominationModel } from 'src/app/core/model/film-model/film-nomination.model';

@Component({
  selector: 'app-nomination-film-view',
  templateUrl: './nomination-film-view.component.html',
  styleUrls: ['./nomination-film-view.component.scss']
})
export class NominationFilmViewComponent implements OnInit {

  filmNomination: FilmNominationModel;
  listNominationFilms: any;

  constructor(private filmOnlineService: FilmOnlineService) { }

  ngOnInit() {
    this.filmNomination = new FilmNominationModel();
    this.filmOnlineService.getListFilmsNomination().subscribe(result => {
      if (result) {
        this.filmNomination = result;
        this.listNominationFilms = result.listFilmNominations;
      }
    });
  }

  onClickLoadMore() {
    this.filmOnlineService.getLoadMoreFilmNomination(this.filmNomination.numberFilmNominationCurrent, 7)
      .subscribe(result => {
        if (result) {
          this.filmNomination = result;
          result.listFilmNominations.forEach(element => {
            this.listNominationFilms.push(element);
          });
        }
      });
  }
}
