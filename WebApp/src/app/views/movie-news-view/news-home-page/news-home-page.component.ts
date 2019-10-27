import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MovieNewsService } from 'src/app/core/services/movie-news.service';
import { Router } from '@angular/router';
import { ItemShowingEnum } from 'src/app/core/enum/item-showing.enum'
import { MovieNewsSharedService } from 'src/app/core/services/movie-news-shared.service';

@Component({
  selector: 'app-news-home-page',
  templateUrl: './news-home-page.component.html',
  styleUrls: ['./news-home-page.component.scss']
})
export class NewsHomePageComponent implements OnInit {

  newsId: any = 0;
  show: boolean = true;
  sideShow: boolean = false;
  listClip: any = [];
  type = ItemShowingEnum.News;

  constructor(private movieNewsService: MovieNewsService,
    private router: Router,
    private movieNewsSharedService: MovieNewsSharedService) { }


  ngOnInit() {
    this.movieNewsService.getAll().subscribe(result => {
      if (result) {
        this.listClip = result.splice(0, 5);
      }
    });
  }

  onClickLogicChange(id) {
    this.movieNewsSharedService.set(id);
  }

  sidelogicChange(event) {
    this.newsId = event;
    this.show = !this.show;
  }
}
