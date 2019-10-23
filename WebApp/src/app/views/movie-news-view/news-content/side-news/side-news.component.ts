import { Component, OnInit, Output, EventEmitter, Input, ɵConsole, OnChanges } from '@angular/core';
import { MovieNewsService } from 'src/app/core/services/movie-news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-news-section',
  templateUrl: './side-news.component.html',
  styleUrls: ['./side-news.component.scss']
})
export class SidenewsSectionComponent implements OnInit, OnChanges {

  listclip: any[] = [];
  news: [] = [];
  firstrun: boolean = true;

  @Output() show = new EventEmitter<any>();
  @Input() newsId: number = 0;

  constructor(private movieNewsService: MovieNewsService,
    private router: Router) { }

  ngOnInit() {
  }

  onClickLogicChange(id) {
    // this.newsId = id;
    // this.show.emit(this.newsId);
    this.router.navigateByUrl("news/news-detail")
  }

  ngOnChanges() {
    this.loadTrendingItems(0);
  }

  private loadTrendingItems(itemindex) {
    this.movieNewsService.getAll().subscribe(result => {
      if (result) {
        this.listclip = [];
        result.splice(0, itemindex);
        var randomid: any;
        for (var i = 0; i < 3; i++) {
          do {
            randomid = result[Math.floor(Math.random() * result.length)];
          }
          while (randomid.id == this.newsId)
          let index = result.map(x => x.id).indexOf(randomid.id);
          this.listclip.push(randomid);
          result.splice(index, 1);
        }
      }
    });
  }
}
