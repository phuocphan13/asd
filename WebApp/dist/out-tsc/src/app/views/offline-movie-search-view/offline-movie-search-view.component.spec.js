import { async, TestBed } from '@angular/core/testing';
import { OfflineMovieSearchViewComponent } from './offline-movie-search-view.component';
describe('OfflineMovieSearchViewComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [OfflineMovieSearchViewComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(OfflineMovieSearchViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=offline-movie-search-view.component.spec.js.map