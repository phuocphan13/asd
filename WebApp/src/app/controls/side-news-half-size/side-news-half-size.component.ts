import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-news-half-size',
  templateUrl: './side-news-half-size.component.html',
  styleUrls: ['./side-news-half-size.component.scss']
})

export class SidenewsHalfsizeComponent implements OnInit {

  listclip: any = [
    {
      headertitle: 'Star Wars 9 LEGO Sets Reveal Rise of Skywalkers New Millennium Falcon Design',
      img: 'https://static2.srcdn.com/wordpress/wp-content/uploads/2019/04/Star-Wars-The-Rise-of-Skywalker-Trailer-Millennium-Falcon.jpg?q=50&fit=crop&w=325&h=200&dpr=1.5',
    },
    {
      headertitle: 'The Breaking Bad Movie Is Finished Filming, Says Bob Odenkirk',
      img: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2019/07/The-Cast-of-Breaking-Bad.jpg?q=50&fit=crop&w=325&h=200&dpr=1.5',
    },
    {
      headertitle: 'Dark Phoenix Could Be To Blame For Spider-Man Leaving Marvel',
      img: 'https://static2.srcdn.com/wordpress/wp-content/uploads/2019/08/Spider-Man-Dark-Phoenix.jpg?q=50&fit=crop&w=325&h=200&dpr=1.5',
    }
  ]

  constructor() {
    console.log(this.listclip);
  }

  ngOnInit() {
  }

}
