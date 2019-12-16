import { Component, OnInit } from '@angular/core';
import { MovieNewsSharedService } from 'src/app/core/services/movie-news-shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-news-view',
  templateUrl: './movie-news-view.component.html',
  styleUrls: ['./movie-news-view.component.scss']
})
export class MovieNewsViewComponent implements OnInit {

  constructor(private movieNewsSharedService: MovieNewsSharedService,
    private router: Router) { }

  ngOnInit() {
  }
}
