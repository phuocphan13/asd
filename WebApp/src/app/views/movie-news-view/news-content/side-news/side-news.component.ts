import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MovieNewsService } from 'src/app/core/services/movie-news.service';

@Component({
  selector: 'app-side-news-section',
  templateUrl: './side-news.component.html',
  styleUrls: ['./side-news.component.scss']
})
export class SidenewsSectionComponent implements OnInit {

  listclip: [];
  news: [] = [] ;

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
      // this.news[0]=0;
      this.listclip = result;
      var newsamount: number = 0;
      var randomid: number =0;
      var temp : number = 0;
      randomid = this.listclip[Math.floor(Math.random() * this.listclip.length)];     
      // if(randomid != this.newsId)
      // {
      //   this.news[newsamount] = randomid;
      // }
      newsamount++;
      newsamount = this.listclip.length;
      this.listclip = result.splice(5, newsamount);
    });
  }
}
