import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MovieNewsService } from 'src/app/core/services/movie-news.service';

@Component({
  selector: 'main-news-section',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.scss']
})
export class NewsSectionComponent implements OnInit {
  
  @Input() newsID: number;
  detailNews: any;

  constructor(private movieNewsService: MovieNewsService) {

  }

  ngOnInit() {
    this.movieNewsService.GetById(this.newsID).subscribe(result => {
      console.log(result);
      this.detailNews=result;
      console.log(this.detailNews);
    })
    
  }


  
}
