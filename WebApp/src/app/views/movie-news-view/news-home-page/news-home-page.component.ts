import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-home-page',
  templateUrl: './news-home-page.component.html',
  styleUrls: ['./news-home-page.component.scss']
})
export class NewsHomePageComponent implements OnInit {

  constructor() { }
  show: boolean=true;
  id1 : any = {
    headertitle: 'Star Wars 9 LEGO Sets Reveal Rise of Skywalkers New Millennium Falcon Design',   
    img:'https://static3.srcdn.com/wordpress/wp-content/uploads/2019/09/Saitama-One-Punch-Man-manga.jpg?q=50&fit=crop&w=325&h=200&dpr=1.5', 
    description:'Arrowverse actor Brandon Routh channels Alex Rosss original comic book art for a new Kingdom Come Superman image in full Crisis costume.',
    date: "22/09/2019",
    author:"Bill Mcgill"
  }
  id2 : any = {
    headertitle: 'The Breaking Bad Movie Is Finished Filming, Says Bob Odenkirk',   
    img:'https://static1.srcdn.com/wordpress/wp-content/uploads/2018/10/Fantastic-Four-Return-Marvel-Explained.jpg?q=50&fit=crop&w=325&h=200&dpr=1.5', 
    description:'Arrowverse actor Brandon Routh channels Alex Rosss original comic book art for a new Kingdom Come Superman image in full Crisis costume.',
    date: "23/09/2019",
    author:"John Smelly"
  }
  id3 : any = {
    headertitle: 'Dark Phoenix Could Be To Blame For Spider-Man Leaving Marvel',   
    img:'https://static1.srcdn.com/wordpress/wp-content/uploads/2019/09/Brandon-Routh-Superman-Crisis-On-Infinite-Earths-Featured.jpg?q=50&fit=crop&w=325&h=200&dpr=1.5', 
    description:'Arrowverse actor Brandon Routh channels Alex Rosss original comic book art for a new Kingdom Come Superman image in full Crisis costume.',
    date: "22/09/2019",
    author:"Bojack Horseman"
  }
  id4 : any = {
    headertitle: 'Spider-Man Will Appear In Another Upcoming Marvel Movie',   
    img:'https://static0.srcdn.com/wordpress/wp-content/uploads/2019/09/Fallout-VS-Skyrim-Memes-Feature-Image.jpeg?q=50&fit=crop&w=325&h=200&dpr=1.5', 
    description:'As part of Sony and Disneys new agreement, it has been confirmed Spider-Man will appear in a future Marvel Studios film.',
    date: "22/09/2019",
    author:"Chris Black"
  }
  id5 : any = {
    headertitle: 'Netflix In The Shadow Of The Moon Ending Explained',   
    img:'https://static0.srcdn.com/wordpress/wp-content/uploads/2019/08/Spider-Man-with-Marvel-and-Sony-logos.jpg?q=50&fit=crop&w=325&h=200&dpr=1.5', 
    description:'Arrowverse actor Brandon Routh channels Alex Rosss original comic book art for a new Kingdom Come Superman image in full Crisis costume.',
    date: "22/09/2019",
    author:"Bojack Horseman"
  }
  id6 : any = {
    headertitle: 'Dark Phoenix Could Be To Blame For Spider-Man Leaving Marvel',   
    img:'https://static0.srcdn.com/wordpress/wp-content/uploads/2019/07/Quake-from-Agents-of-SHIELD-and-Marvel-Television.jpg?q=50&fit=crop&w=325&h=200&dpr=1.5', 
    description:'In The Shadow Of The Moon ending is not what you expect. We dive into what the Boyd Holdbrook detective sci-fi really means.',
    date: "12/09/2019",
    author:"Bojack Horseman"
  }
  listclip: any =[this.id1,this.id2,this.id3,this.id4,this.id5,this.id6];

  ngOnInit() {
  }
  logicChange(){
    this.show=!this.show;
  }
}
