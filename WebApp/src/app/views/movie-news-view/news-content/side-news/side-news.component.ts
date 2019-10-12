import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MovieNewsService } from 'src/app/core/services/movie-news.service';

@Component({
  selector: 'app-side-news-section',
  templateUrl: './side-news.component.html',
  styleUrls: ['./side-news.component.scss']
})
export class SidenewsSectionComponent implements OnInit {

  listclip: [];

  @Output() show = new EventEmitter<any>();
  newsId: any = 0;

  constructor(private movieNewsService: MovieNewsService) { }

  ngOnInit() {
    this.loadingTrendingItems();
  }

  onClickLogicChange(id) {
    this.newsId = id;
    this.loadingTrendingItems();
    this.show.emit(this.newsId);
  }
  
  private loadingTrendingItems() {
    this.movieNewsService.getAll().subscribe(result => {
      this.listclip = result;
      var newsamount: number = 0;
      newsamount = this.listclip.length;
      this.listclip = result.splice(5, newsamount);
    });
  }
}
