import { async, TestBed } from '@angular/core/testing';
import { OnlineMoviesCenterViewComponent } from './online-movies-center-view.component';
describe('OnlineMoviesCenterViewComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [OnlineMoviesCenterViewComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(OnlineMoviesCenterViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=online-movies-center-view.component.spec.js.map