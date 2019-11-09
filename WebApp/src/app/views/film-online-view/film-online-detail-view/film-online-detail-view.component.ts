import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-online-detail-view',
  templateUrl: './film-online-detail-view.component.html',
  styleUrls: ['./film-online-detail-view.component.scss']
})
export class FilmOnlineDetailViewComponent implements OnInit {

  filmId: number;
  data: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(x => {
      if (x) {
        this.filmId = parseInt(x.toString());
      }
    })
  }

}
