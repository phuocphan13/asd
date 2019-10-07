import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MovieNewsService } from 'src/app/core/services/movie-news.service';

@Component({
  selector: 'app-news-home-page',
  templateUrl: './news-home-page.component.html',
  styleUrls: ['./news-home-page.component.scss']
})
export class NewsHomePageComponent implements OnInit {

  constructor(private movieNewsService: MovieNewsService ) { }


  newsId: any = 0;
  show: boolean = true;
  listclip: any = [] ;
  itemcounter : any = 0;

  ngOnInit() {
    this.movieNewsService.getAll().subscribe(result =>{
      console.log(result);
      this.listclip=result;
      this.itemcounter++;
    });
  }
  logicChange(id){
    this.show=!this.show;
    this.newsId=id;
  }
}
