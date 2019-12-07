import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nomination-film-detail',
  templateUrl: './nomination-film-detail.component.html',
  styleUrls: ['./nomination-film-detail.component.scss']
})
export class NominationFilmDetailComponent implements OnInit {

  @Input() data: any;

  constructor(private _domSanitizer: DomSanitizer,
    private router: Router) { }

  ngOnInit() {
  }

  onClickFilmDetail() {
    this.router.navigateByUrl(`film-online/film-detail/${this.data.id}`)
  }
}
