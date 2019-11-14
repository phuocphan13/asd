import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FilmOnlineService } from 'src/app/core/services/film-online.service';

@Component({
  selector: 'app-film-online-detail-view',
  templateUrl: './film-online-detail-view.component.html',
  styleUrls: ['./film-online-detail-view.component.scss']
})
export class FilmOnlineDetailViewComponent implements OnInit {

  filmId: number;
  data: any;
  listFilmDetails: any;

  dropdownItemsTrendingArray = [
    { id: 1, text: "Newest Date" },
    { id: 2, text: "Oldest Date" },
    { id: 3, text: "Newest Date" },
    { id: 4, text: "Oldest Date" },
    { id: 5, text: "Newest Date" },
    { id: 6, text: "Oldest Date" },
  ]

  dropdownItemsSortingArray = [
    { id: 1, text: "Newest Date" },
    { id: 2, text: "Oldest Date" },
    { id: 3, text: "Newest Date" },
    { id: 4, text: "Oldest Date" },
    { id: 5, text: "Newest Date" },
    { id: 6, text: "Oldest Date" },
  ]

  constructor(private activatedRoute: ActivatedRoute,
    private filmOnlineService: FilmOnlineService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(x => {
      if (x) {
        this.filmId = parseInt(x.toString());
        this.getFilmDetail(this.filmId);
      }
    });
  }

  private getFilmDetail(filmId: number) {
    this.filmOnlineService.getListFilmDetails(filmId, 3).subscribe(result => {
      if (result) {
        this.listFilmDetails = result;
        for (let i = 0; i < this.listFilmDetails.length; i++) {
          this.listFilmDetails[i].isExpand = i === 0;
        }
      }
    });
  }

  onChangeViewDetail(event: number) {
    this.listFilmDetails.forEach(element => {
      if (element.id !== event) {
        element.isExpand = false;
      }
    });
  }
}
