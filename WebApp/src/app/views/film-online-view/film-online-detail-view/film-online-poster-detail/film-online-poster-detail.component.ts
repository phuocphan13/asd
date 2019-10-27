import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-film-online-poster-detail',
  templateUrl: './film-online-poster-detail.component.html',
  styleUrls: ['./film-online-poster-detail.component.scss']
})
export class FilmOnlinePosterDetailComponent implements OnInit {

  data: any = {
    imgUrl: "http://localhost:59239/resources/images/venom-poster.jpg",
    title: "Venom",
    description:"Journalist Eddie Brock is trying to take down Carlton Drake, the notorious and brilliant founder of the Life Foundation. While investigating one of Drake's experiments, Eddie's body merges with the alien Venom -- leaving him with superhuman strength and power. Twisted, dark and fueled by rage, Venom tries to control the new and dangerous abilities that Eddie finds so intoxicating.",
    time: 230,
    startTime: "13 Apr 2019(USA)",
    style: "Action, Drama, Scary",
    score: 15,
  }

  constructor(private _domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}