import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-online-detail-view',
  templateUrl: './film-online-detail-view.component.html',
  styleUrls: ['./film-online-detail-view.component.scss']
})
export class FilmOnlineDetailViewComponent implements OnInit {

  id: number;
  data: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(x => {
      console.log(x);
    })
  }

}
