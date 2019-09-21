import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  list: any;

  mainNews: any;

  listNews: any;

  listArticles: any = [
    {
      id: 0,
      imgUrl: "https://static0.srcdn.com/wordpress/wp-content/uploads/2019/08/10-Times-Iron-Man-Was-The-True-Villain-Of-The-MCU.jpg?q=50&fit=crop&w=788&h=440&dpr=1.5 1182w ",
      link: "https://www.google.com",
      title: "10 Times Iron Man Was The True Villain Of The MCU",
      author: "Scoot Allan",
      authorlink: "https://bilutv.org",
      date: "Aug 11, 2019",
      datelink:"https://screenrant.com"
    },
    {
      id: 1,
      imgUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/08/MCU-2023-Phase-5-Slate-SR.jpg?q=50&fit=crop&w=354&h=235&dpr=1.5 531w",
      link: "https://www.youtube.com",
      title: "10 Times Iron Man Was The True Villain Of The MCU",
      author: "Scoot Allan",
      authorlink: "https://bilutv.org",
      date: "Aug 11, 2019",
      datelink:"https://screenrant.com"
    },
    {
      id: 2,
      link: "https://www.youtube.com",
      infor: "Marvel Studios hasn't announced what MCU movies could be released during Phase 5 yet, so here are our predictions for their 2023 slate.",
      title: "Predicting Marvel's 2023 Movie Release Slate",
      date: "Aug 17, 2019",
      datelink:"https://screenrant.com",
      author: "Cooper Hood",
      authorlink: "https://bilutv.org",
      imgUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/08/MCU-2023-Phase-5-Slate-SR.jpg?q=50&fit=crop&w=354&h=235&dpr=1.5 531w"
    },
    {
      id: 3,
      link: "https://www.youtube.com",
      infor: "Marvel Studios hasn't announced what MCU movies could be released during Phase 5 yet, so here are our predictions for their 2023 slate.",
      title: "Predicting Marvel's 2023 Movie Release Slate",
      date: "Aug 17, 2019",
      author: "Cooper Hood",
      authorlink: "https://bilutv.org",
      datelink:"https://screenrant.com",
      imgUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/08/MCU-2023-Phase-5-Slate-SR.jpg?q=50&fit=crop&w=354&h=235&dpr=1.5 531w"
    },
    {
      id: 4,
      link: "https://www.youtube.com",
      infor: "Marvel Studios hasn't announced what MCU movies could be released during Phase 5 yet, so here are our predictions for their 2023 slate.",
      title: "Predicting Marvel's 2023 Movie Release Slate",
      date: "Aug 17, 2019",
      author: "Cooper Hood",
      authorlink: "https://bilutv.org",
      datelink:"https://screenrant.com",
      imgUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/08/MCU-2023-Phase-5-Slate-SR.jpg?q=50&fit=crop&w=354&h=235&dpr=1.5 531w"
    }
  ]

  constructor() {
  }

  ngOnInit() {
    this.sliptNews();
  }

  private sliptNews(){
    this.mainNews = this.listArticles[0];
    this.listNews = this.listArticles.filter(x => x.id !== this.mainNews.id);
  }
}
