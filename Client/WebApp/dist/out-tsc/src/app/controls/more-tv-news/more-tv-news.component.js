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
var MoreTvNewsComponent = /** @class */ (function () {
    function MoreTvNewsComponent() {
        this.listNews = [
            {
                id: 0,
                imgUrl: "https://static3.srcdn.com/wordpress/wp-content/uploads/2019/08/tmp-8AHwuV-fe56ff259ddb7c5a-151662-2556-1.jpg?q=50&fit=crop&w=386&h=185",
                link: "https://screenrant.com/bachelor-mike-johnson-consideration-next/",
                title: "Mike Johnson in Serious Consideration to Become The Next Bachelor",
                author: "BY JUSTIN FEDICH",
                titleUrl: "https://screenrant.com/bachelor-mike-johnson-consideration-next/",
                authorUrl: "https://screenrant.com/author/jfedi/",
            },
            {
                id: 1,
                imgUrl: "https://static2.srcdn.com/wordpress/wp-content/uploads/2019/08/teen-choice-awards-2019-header.jpg?q=50&fit=crop&w=386&h=185",
                link: "https://screenrant.com/teen-choice-awards-ratings-all-time-low-second-year/",
                title: "Kris Jenner Attempts to Unite Her Family During Chic Cowgirl Bonding Trip",
                author: "BY BETHANY GUERRERO",
                titleUrl: "https://screenrant.com/teen-choice-awards-ratings-all-time-low-second-year/",
                authorUrl: "https://screenrant.com/author/bguer/",
            },
            {
                id: 2,
                imgUrl: "https://static3.srcdn.com/wordpress/wp-content/uploads/2019/08/Friends-TV-Show-Cast.jpg?q=50&fit=crop&w=386&h=185",
                link: "https://screenrant.com/friends-tv-show-episodes-theaters-release/",
                title: "Friends TV Show Episodes Coming To Theaters This Fall",
                author: "BY ABDULLAH AL-GHAMDI",
                titleUrl: "https://screenrant.com/friends-tv-show-episodes-theaters-release/",
                authorUrl: "https://screenrant.com/author/aalgh/",
            },
            {
                id: 3,
                imgUrl: "https://static3.srcdn.com/wordpress/wp-content/uploads/2019/08/Morning-Show-Trailer-Jennifer-Aniston.jpg?q=50&fit=crop&w=386&h=185",
                link: "https://screenrant.com/morning-show-trailer-jennifer-aniston-apple-tv-plus/",
                title: "Morning Show Trailer: Jennifer Aniston, Steve Carell Star In Apple TV+ Show",
                author: "BY ABDULLAH AL-GHAMDI",
                titleUrl: "https://screenrant.com/morning-show-trailer-jennifer-aniston-apple-tv-plus/",
                authorUrl: "https://screenrant.com/author/aalgh/",
            },
        ];
        this.listRightNews = [];
        this.listLeftNews = [];
    }
    MoreTvNewsComponent.prototype.ngOnInit = function () {
        this.sliptNews();
    };
    MoreTvNewsComponent.prototype.sliptNews = function () {
        for (var i = 0; i < this.listNews.length; i++) {
            if (i % 2 == 1) {
                this.listRightNews.push(this.listNews[i]);
            }
            else {
                this.listLeftNews.push(this.listNews[i]);
            }
        }
    };
    MoreTvNewsComponent = __decorate([
        Component({
            selector: 'app-more-tv-news',
            templateUrl: './more-tv-news.component.html',
            styleUrls: ['./more-tv-news.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], MoreTvNewsComponent);
    return MoreTvNewsComponent;
}());
export { MoreTvNewsComponent };
//# sourceMappingURL=more-tv-news.component.js.map