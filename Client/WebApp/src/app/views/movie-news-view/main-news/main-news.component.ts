import { Component, OnInit, Output, EventEmitter, Input, ɵConsole, OnChanges } from '@angular/core';
import { MovieNewsService } from 'src/app/core/services/movie-news.service';
import { MovieNewsSharedService } from 'src/app/core/services/movie-news-shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'main-news-section',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.scss']
})
export class MainNewsComponent implements OnInit, OnChanges {


  detailNews: any = {
    headline: "",
  };

  newsId: number;

  constructor(private movieNewsService: MovieNewsService,
    private activatedRoute: ActivatedRoute,
    private movieNewsSharedService: MovieNewsSharedService) {
  }

  ngOnInit() {
    this.newsId = this.movieNewsSharedService.get();
  }

  ngOnChanges() {
  }

  private loadingNews() {
    this.movieNewsService.getById(this.newsId).subscribe(result => {
      this.detailNews = result;
    })
  }
}
