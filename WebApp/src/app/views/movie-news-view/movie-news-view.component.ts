import { Component, OnInit } from '@angular/core';
import { MovieNewsSharedService } from 'src/app/core/services/movie-news-shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-news-view',
  templateUrl: './movie-news-view.component.html',
  styleUrls: ['./movie-news-view.component.scss']
})
export class MovieNewsViewComponent implements OnInit {

  isShow: boolean = true;
  newsId: number;
  constructor(private movieNewsSharedService: MovieNewsSharedService,
    private router: Router) { }

  ngOnInit() {
    this.movieNewsSharedService.routingAction.subscribe(result => {
      if (result) {
        this.router.navigateByUrl("payment");
      }
    });
  }

  getNewsId(event) {
    console.log(event);
    this.newsId = event;
    this.isShow = false;
  }
}
