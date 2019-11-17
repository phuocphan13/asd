import { async, TestBed } from '@angular/core/testing';
import { CarouselFilmDetailComponent } from './carousel-film-detail.component';
describe('CarouselFilmDetailComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CarouselFilmDetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CarouselFilmDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=carousel-film-detail.component.spec.js.map