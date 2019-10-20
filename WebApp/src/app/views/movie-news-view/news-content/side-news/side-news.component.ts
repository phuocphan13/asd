import { Component, OnInit, Output, EventEmitter, Input, ɵConsole, OnChanges } from '@angular/core';
import { MovieNewsService } from 'src/app/core/services/movie-news.service';

@Component({
  selector: 'app-side-news-section',
  templateUrl: './side-news.component.html',
  styleUrls: ['./side-news.component.scss']
})
export class SidenewsSectionComponent implements OnInit , OnChanges {

  listclip: any[] = [];
  news: [] = [];

  @Output() show = new EventEmitter<any>();
  @Input() newsId: number = 0;

  constructor(private movieNewsService: MovieNewsService) { }

  ngOnInit() {
    
    this.loadingTrendingItems();
  }

  onClickLogicChange(id) {
    this.listclip = [];
    this.newsId = id;
    this.loadingTrendingItems();
    this.show.emit(this.newsId);
  }

  ngOnChanges(){
    
  }

  private loadingTrendingItems() {
    this.movieNewsService.getAll().subscribe(result => {
      result.splice(0,5);
      var randomid: any;
      for (var i = 0; i < 3; i++) {
        do {
          randomid = result[Math.floor(Math.random() * result.length)];
        }
        while (randomid.id == this.newsId)
        let index = result.map(x => x.id).indexOf(randomid.id);
        this.listclip.push(randomid);
        result.splice(index, 1);
        console.log(result);
      }
    });
  }
}
