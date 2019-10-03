import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../core/services/shared.service';
import { ItemShowingComponent } from 'src/app/common/components/item-showing/item-showing.component';
import { ItemShowingEnum } from 'src/app/core/enum/item-showing.enum';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  movie: any = {
    name: "Lucifer, King of the Hell",
    description: "Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels.",
    time: 90,
    showtime: ["11:00", "12:00", "13:00", "14:00"],
    date: "13-04-2019",
    imgUrl: "https://m.media-amazon.com/images/M/MV5BZTA2NTBkYWUtMzM4Zi00YzhlLTk4NWItY2U1ODczNDMyNDAzXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  }

  news: any = {
    name: "State Department stepped up Hillary Clinton email probe beginning in August: report",
    author: "Morgan Phillips",
    date: "13-04-2019",
    description: "The State Department reportedly has ramped up its investigation into Hillary Clinton’s private server, potentially reviving an issue that dominated the 2016 presidential election campaign.",
    imgUrl: "https://vignette.wikia.nocookie.net/solo-leveling/images/0/07/Solo_Leveling_Webtoon_cover.png/revision/latest?cb=20190324041910",
  }

  text = "<p class='asdasdasd'>Tom Holland's <a href='javascript:void(0)'><b>Spider-Man</b></a> can appear in both the MCU and Sony's <br> Spider-villain universe now, but it won't be easy and it will be messy. Marvel Studios and Sony Pictures have reached a new agreement, meaning Holland's Spider-Man will remain part of the MCU. The two studios will work together on Spider-Man: Homecoming 3, due out in 2021, and the wall-crawler will also appear in another unconfirmed MCU movie.<p> <img src='https://static3.srcdn.com/wordpress/wp-content/uploads/2019/09/Spider-Man-with-Venom-and-Kevin-Feige.jpg?q=50&fit=crop&w=798&h=407'> <br> <p>NM<ZXCJASJA</p>";
  type = ItemShowingEnum.News;
  constructor() {
  }

  ngOnInit() {

  }

}
