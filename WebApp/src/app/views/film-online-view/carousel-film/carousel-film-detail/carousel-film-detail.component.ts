import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-carousel-film-detail',
  templateUrl: './carousel-film-detail.component.html',
  styleUrls: ['./carousel-film-detail.component.scss']
})
export class CarouselFilmDetailComponent implements OnInit {

  @Input("data") item: any;

  constructor(private _domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
