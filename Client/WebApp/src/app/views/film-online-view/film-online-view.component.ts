import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-film-online-view',
  templateUrl: './film-online-view.component.html',
  styleUrls: ['./film-online-view.component.scss']
})
export class FilmOnlineViewComponent implements OnInit {

  constructor(private router: Router,
    private alertService: AlertService) { }

  ngOnInit() {
    // this.router.navigateByUrl('film-online/film-detail/2');
    
    // this.router.navigateByUrl("film-online/film-detail/1");
  }
}
