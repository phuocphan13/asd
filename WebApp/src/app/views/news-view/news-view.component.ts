import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../core/services/shared.service';
import { MenuService } from '../../core/services/menu.service';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
