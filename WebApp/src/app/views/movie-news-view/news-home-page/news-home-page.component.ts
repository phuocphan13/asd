import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MovieNewsService } from 'src/app/core/services/movie-news.service';

@Component({
  selector: 'app-news-home-page',
  templateUrl: './news-home-page.component.html',
  styleUrls: ['./news-home-page.component.scss']
})
export class NewsHomePageComponent implements OnInit {

  @Output() sendingNewsId = new EventEmitter();

  constructor(private movieNewsService: MovieNewsService ) { }


  newsId: any = 0;
  show: boolean = true;
  sideshow: boolean =false;
  listclip: any = [] ;
  itemcounter : any = 0;

  ngOnInit() {
    var newscount: any=0;
    this.movieNewsService.getAll().subscribe(result =>{
      this.listclip = result.splice(0,5);
      this.itemcounter++;
    });
  }

  onClickLogicChange(id){
    // this.show = !this.show;
    // this.sideshow = false;
    // this.newsId = id;
    this.sendingNewsId.emit(id);
  }

  SidelogicChange(event){   
    // if(this.show==true)
    // {
    //   this.show = !this.show;
    // } 
    this.newsId = event;
    this.show = !this.show;
    console.log(this.newsId);
  }
}
