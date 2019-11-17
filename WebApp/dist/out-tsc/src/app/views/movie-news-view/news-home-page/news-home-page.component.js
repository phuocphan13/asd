var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var NewsHomePageComponent = /** @class */ (function () {
    function NewsHomePageComponent() {
        this.show = true;
        this.id1 = {
            headertitle: 'Star Wars 9 LEGO Sets Reveal Rise of Skywalkers New Millennium Falcon Design',
            img: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2019/09/Saitama-One-Punch-Man-manga.jpg?q=50&fit=crop&w=325&h=200&dpr=1.5',
            description: 'Arrowverse actor Brandon Routh channels Alex Rosss original comic book art for a new Kingdom Come Superman image in full Crisis costume.',
            date: "22/09/2019",
            author: "Bill Mcgill"
        };
        this.id2 = {
            headertitle: 'The Breaking Bad Movie Is Finished Filming, Says Bob Odenkirk',
            img: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2018/10/Fantastic-Four-Return-Marvel-Explained.jpg?q=50&fit=crop&w=325&h=200&dpr=1.5',
            description: 'Arrowverse actor Brandon Routh channels Alex Rosss original comic book art for a new Kingdom Come Superman image in full Crisis costume.',
            date: "23/09/2019",
            author: "John Smelly"
        };
        this.id3 = {
            headertitle: 'Dark Phoenix Could Be To Blame For Spider-Man Leaving Marvel',
            img: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2019/09/Brandon-Routh-Superman-Crisis-On-Infinite-Earths-Featured.jpg?q=50&fit=crop&w=325&h=200&dpr=1.5',
            description: 'Arrowverse actor Brandon Routh channels Alex Rosss original comic book art for a new Kingdom Come Superman image in full Crisis costume.',
            date: "22/09/2019",
            author: "Bojack Horseman"
        };
        this.id4 = {
            headertitle: 'Spider-Man Will Appear In Another Upcoming Marvel Movie',
            img: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2019/09/Fallout-VS-Skyrim-Memes-Feature-Image.jpeg?q=50&fit=crop&w=325&h=200&dpr=1.5',
            description: 'As part of Sony and Disneys new agreement, it has been confirmed Spider-Man will appear in a future Marvel Studios film.',
            date: "22/09/2019",
            author: "Chris Black"
        };
        this.id5 = {
            headertitle: 'Netflix In The Shadow Of The Moon Ending Explained',
            img: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2019/08/Spider-Man-with-Marvel-and-Sony-logos.jpg?q=50&fit=crop&w=325&h=200&dpr=1.5',
            description: 'Arrowverse actor Brandon Routh channels Alex Rosss original comic book art for a new Kingdom Come Superman image in full Crisis costume.',
            date: "22/09/2019",
            author: "Bojack Horseman"
        };
        this.id6 = {
            headertitle: 'Dark Phoenix Could Be To Blame For Spider-Man Leaving Marvel',
            img: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2019/07/Quake-from-Agents-of-SHIELD-and-Marvel-Television.jpg?q=50&fit=crop&w=325&h=200&dpr=1.5',
            description: 'In The Shadow Of The Moon ending is not what you expect. We dive into what the Boyd Holdbrook detective sci-fi really means.',
            date: "12/09/2019",
            author: "Bojack Horseman"
        };
        this.listclip = [this.id1, this.id2, this.id3, this.id4, this.id5, this.id6];
    }
    NewsHomePageComponent.prototype.ngOnInit = function () {
    };
    NewsHomePageComponent.prototype.logicChange = function () {
        this.show = !this.show;
    };
    NewsHomePageComponent = __decorate([
        Component({
            selector: 'app-news-home-page',
            templateUrl: './news-home-page.component.html',
            styleUrls: ['./news-home-page.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], NewsHomePageComponent);
    return NewsHomePageComponent;
}());
export { NewsHomePageComponent };
//# sourceMappingURL=news-home-page.component.js.map