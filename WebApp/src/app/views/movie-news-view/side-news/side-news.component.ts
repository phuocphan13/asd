import { Component, OnInit, Output, EventEmitter, Input, ɵConsole, OnChanges } from '@angular/core';
import { MovieNewsService } from 'src/app/core/services/movie-news.service';

@Component({
  selector: 'app-side-news-section',
  templateUrl: './side-news.component.html',
  styleUrls: ['./side-news.component.scss']
})
export class SidenewsComponent implements OnInit, OnChanges {

  listClip: any[] = [];
  news: [] = [];
  firstRun: boolean = true;

  @Output() show = new EventEmitter<any>();
  @Input() newsId: number = 0;

  constructor(private movieNewsService: MovieNewsService) { }

  ngOnInit() {
  }

  onClickLogicChange(id) {
    this.newsId = id;
    this.show.emit(this.newsId);
  }

  ngOnChanges() {
    this.loadTrendingItems(0);
  }

  private loadTrendingItems(itemindex) {
    this.movieNewsService.getAll().subscribe(result => {
      if (result) {
        this.listClip = [];
        result.splice(0, itemindex);
        var randomid: any;
        for (var i = 0; i < 3; i++) {
          do {
            randomid = result[Math.floor(Math.random() * result.length)];
          }
          while (randomid.id == this.newsId)
          let index = result.map(x => x.id).indexOf(randomid.id);
          this.listClip.push(randomid);
          result.splice(index, 1);
        }
      }
    });
  }
}
