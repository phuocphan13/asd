import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MovieNewsService } from 'src/app/core/services/movie-news.service';
import { Router } from '@angular/router';
import { ItemShowingEnum } from 'src/app/core/enum/item-showing.enum'

@Component({
  selector: 'app-news-home-page',
  templateUrl: './news-home-page.component.html',
  styleUrls: ['./news-home-page.component.scss']
})
export class NewsHomePageComponent implements OnInit {

  @Output() sendingNewsId = new EventEmitter();

  constructor(private movieNewsService: MovieNewsService,
    private router: Router) { }

  newsId: any = 0;
  show: boolean = true;
  sideShow: boolean = false;
  listClip: any = [];
  itemCounter: any = 0;
  type = ItemShowingEnum.News;

  ngOnInit() {
    this.movieNewsService.getAll().subscribe(result => {
      if (result) {
        this.listClip = result.splice(0, 5);
        this.itemCounter++;
      }
    });
  }

  onClickLogicChange(id) {
    // this.show = !this.show;
    // this.sideshow = false;
    // this.newsId = id;
    // this.sendingNewsId.emit(id);
    this.router.navigateByUrl("news-detail")
  }

  sidelogicChange(event) {
    // if(this.show==true)
    // {
    //   this.show = !this.show;
    // } 
    this.newsId = event;
    this.show = !this.show;
  }
}
