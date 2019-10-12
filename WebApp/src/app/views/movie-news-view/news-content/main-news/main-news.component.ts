import { Component, OnInit, Output, EventEmitter, Input, ɵConsole, OnChanges } from '@angular/core';
import { MovieNewsService } from 'src/app/core/services/movie-news.service';

@Component({
  selector: 'main-news-section',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.scss']
})
export class NewsSectionComponent implements OnInit, OnChanges {

  @Input() newsId: number;
  detailNews: any = {
    headline: "",
  };

  constructor(private movieNewsService: MovieNewsService) {
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.loadingNews();
  }

  private loadingNews() {
    this.movieNewsService.getById(this.newsId).subscribe(result => {
      this.detailNews = result;
    })
  }
}
