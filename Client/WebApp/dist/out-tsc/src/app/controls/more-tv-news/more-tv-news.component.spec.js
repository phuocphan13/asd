import { async, TestBed } from '@angular/core/testing';
import { MoreTvNewsComponent } from './more-tv-news.component';
describe('MoreTvNewsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MoreTvNewsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MoreTvNewsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=more-tv-news.component.spec.js.map