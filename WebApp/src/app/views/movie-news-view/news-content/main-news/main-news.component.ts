import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-news-section',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.scss']
})
export class NewsSectionComponent implements OnInit {
  
  id1: any = {
    headertitle: 'New Mutants Delays Explained: Why Fox Haven’t Released The Last X-Men Movie',
    date: '26/08/2019',
    author: 'BRAD',
    content: " \"Thanos could be the real cause of Doctor Strange in the Multiverse of Madness. At San Diego Comic-Con 2019, Marvel Studios finally confirmed that Doctor Strange 2 is in the works and, while the Multiverse may have been fake in Spider-Man: Far From Home, the Sorcerer Supreme is about to face the real deal.It's important to remember, though, that the first Doctor Strange film used the term Multiverse in a slightly different way. Rather than link the concept to alternate timelines, Doctor Strange referred to other planes of existence, like the Dark Dimension and the Quantum Realm. The Ancient One, leader of the Masters of the Mystic Arts, was sworn protector of this plane of reality. Learning of an infinite multiverse includes learning of infinite dangers, she cautioned Stephen Strange. Unfortunately, the Ancient One was killed during the conflict with Kaecilius, and a concerned Wong reflected that news of her demise would spread throughout the Multiverse. He clearly feared that Earth had lost its greatest defender.\" ",
    image1: 'https://static2.srcdn.com/wordpress/wp-content/uploads/2019/08/Doctor-Strange-and-Thanos-in-Avengers-Endgame.jpg?q=50&fit=crop&w=798&h=407&dpr=1.5',
  }

  constructor() {

  }

  ngOnInit() {
    console.log(this.id1);
  }

}
