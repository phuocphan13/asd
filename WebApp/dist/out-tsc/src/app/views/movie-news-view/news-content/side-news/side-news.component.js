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
var SidenewsSectionComponent = /** @class */ (function () {
    function SidenewsSectionComponent() {
        this.id1 = {
            headertitle: 'Star Wars 9 LEGO Sets Reveal Rise of Skywalkers New Millennium Falcon Design',
            img: 'https://static2.srcdn.com/wordpress/wp-content/uploads/2019/04/Star-Wars-The-Rise-of-Skywalker-Trailer-Millennium-Falcon.jpg?q=50&fit=crop&w=325&h=200&dpr=1.5',
        };
        this.id2 = {
            headertitle: 'The Breaking Bad Movie Is Finished Filming, Says Bob Odenkirk',
            img: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2019/07/The-Cast-of-Breaking-Bad.jpg?q=50&fit=crop&w=325&h=200&dpr=1.5',
        };
        this.id3 = {
            headertitle: 'Dark Phoenix Could Be To Blame For Spider-Man Leaving Marvel',
            img: 'https://static2.srcdn.com/wordpress/wp-content/uploads/2019/08/Spider-Man-Dark-Phoenix.jpg?q=50&fit=crop&w=325&h=200&dpr=1.5',
        };
        this.listclip = [this.id1, this.id2, this.id3];
    }
    SidenewsSectionComponent.prototype.ngOnInit = function () {
    };
    SidenewsSectionComponent = __decorate([
        Component({
            selector: 'app-side-news-section',
            templateUrl: './side-news.component.html',
            styleUrls: ['./side-news.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], SidenewsSectionComponent);
    return SidenewsSectionComponent;
}());
export { SidenewsSectionComponent };
//# sourceMappingURL=side-news.component.js.map