import { Component, OnInit, Output, EventEmitter, Input, ɵConsole, OnChanges } from '@angular/core';
import { MovieNewsService } from 'src/app/core/services/movie-news.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieNewsSharedService } from 'src/app/core/services/movie-news-shared.service';

@Component({
  selector: 'app-side-news-section',
  templateUrl: './side-news.component.html',
  styleUrls: ['./side-news.component.scss']
})
export class SidenewsComponent implements OnInit {

  listClip: any[] = [];
  news: [] = [];
  firstRun: boolean = true;

  @Input() newsId: number = 0;

  constructor(private movieNewsService: MovieNewsService,
    private movieNewsSharedService: MovieNewsSharedService,
    private router: Router) { }

  ngOnInit() {
    this.loadTrendingItems(5);
    this.movieNewsSharedService.routingAction.subscribe(result => {
      if(result)
      {
        this.newsId=this.movieNewsSharedService.get();
        this.clearData();
        this.loadTrendingItems(0);
      }
    });
  }

  onClickLogicChange(id) {
    this.newsId=id;
    this.changeAction(id);
    this.clearData();
    this.loadTrendingItems(0);
  }

  private changeAction(id) {
    this.router.navigateByUrl(`news/news-detail/${id}`)
    window.scroll(0,0);
  }

  private clearData(){
    this.listClip= [];
  }

  private loadTrendingItems(itemIndex) {
    this.movieNewsService.getAll().subscribe(result => {
      if (result) {
        result.splice(0, itemIndex);
        var randomid: any;
        for (var i = 0; i < 3; i++) {
          do {
            randomid = result[Math.floor(Math.random() * result.length)];
          }
          while (randomid.id == this.newsId);
          let index = result.map(x => x.id).indexOf(randomid.id);
          this.listClip.push(randomid);
          result.splice(index, 1);
        }
      }
    });
  }
}
