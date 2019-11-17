import { async, TestBed } from '@angular/core/testing';
import { CarouselFilmComponent } from './carousel-film.component';
describe('CarouselFilmComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CarouselFilmComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CarouselFilmComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=carousel-film.component.spec.js.map