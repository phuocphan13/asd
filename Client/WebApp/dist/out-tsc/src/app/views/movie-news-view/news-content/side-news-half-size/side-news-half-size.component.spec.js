import { async, TestBed } from '@angular/core/testing';
import { SidenewsHalfsizeComponent } from './side-news-half-size.component';
describe('SidenewsHalfsizeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SidenewsHalfsizeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SidenewsHalfsizeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=side-news-half-size.component.spec.js.map