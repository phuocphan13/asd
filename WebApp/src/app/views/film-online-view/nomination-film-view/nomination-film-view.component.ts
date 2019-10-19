import { Component, OnInit } from '@angular/core';
import { FilmOnlineService } from 'src/app/core/services/film-online.service';

@Component({
  selector: 'app-nomination-film-view',
  templateUrl: './nomination-film-view.component.html',
  styleUrls: ['./nomination-film-view.component.scss']
})
export class NominationFilmViewComponent implements OnInit {

  listNominationFilms: [];

  constructor(private filmOnlineService: FilmOnlineService) { }

  ngOnInit() {
    this.filmOnlineService.getListFilmsNomination().subscribe(result => {
      if (result) {
        this.listNominationFilms = result;
      }
    })
  }

}
