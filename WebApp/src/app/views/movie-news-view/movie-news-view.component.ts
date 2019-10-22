import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-news-view',
  templateUrl: './movie-news-view.component.html',
  styleUrls: ['./movie-news-view.component.scss']
})
export class MovieNewsViewComponent implements OnInit {

  isShow: boolean = true;
  newsId: number;
  constructor() { }

  ngOnInit() {
  }

  getNewsId(event) {
    console.log(event);
    this.newsId = event;
    this.isShow = false;
  }
}
