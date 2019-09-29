import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-online-movies-center-view',
  templateUrl: './online-movies-center-view.component.html',
  styleUrls: ['./online-movies-center-view.component.scss']
})
export class OnlineMoviesCenterViewComponent implements OnInit {
  @Input("data") listMovie: any;



  constructor() { }

  ngOnInit() {
  }

}
