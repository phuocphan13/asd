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
var NewsSectionComponent = /** @class */ (function () {
    function NewsSectionComponent() {
        this.id1 = {
            headertitle: 'New Mutants Delays Explained: Why Fox Haven’t Released The Last X-Men Movie',
            date: '26/08/2019',
            author: 'BRAD',
            content: " \"Thanos could be the real cause of Doctor Strange in the Multiverse of Madness. At San Diego Comic-Con 2019, Marvel Studios finally confirmed that Doctor Strange 2 is in the works and, while the Multiverse may have been fake in Spider-Man: Far From Home, the Sorcerer Supreme is about to face the real deal.It's important to remember, though, that the first Doctor Strange film used the term Multiverse in a slightly different way. Rather than link the concept to alternate timelines, Doctor Strange referred to other planes of existence, like the Dark Dimension and the Quantum Realm. The Ancient One, leader of the Masters of the Mystic Arts, was sworn protector of this plane of reality. Learning of an infinite multiverse includes learning of infinite dangers, she cautioned Stephen Strange. Unfortunately, the Ancient One was killed during the conflict with Kaecilius, and a concerned Wong reflected that news of her demise would spread throughout the Multiverse. He clearly feared that Earth had lost its greatest defender.\" ",
            image1: 'https://static2.srcdn.com/wordpress/wp-content/uploads/2019/08/Doctor-Strange-and-Thanos-in-Avengers-Endgame.jpg?q=50&fit=crop&w=798&h=407&dpr=1.5',
        };
    }
    NewsSectionComponent.prototype.ngOnInit = function () {
        console.log(this.id1);
    };
    NewsSectionComponent = __decorate([
        Component({
            selector: 'main-news-section',
            templateUrl: './main-news.component.html',
            styleUrls: ['./main-news.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], NewsSectionComponent);
    return NewsSectionComponent;
}());
export { NewsSectionComponent };
//# sourceMappingURL=main-news.component.js.map