import { async, TestBed } from '@angular/core/testing';
import { NominationFilmViewComponent } from './nomination-film-view.component';
describe('NominationFilmViewComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NominationFilmViewComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NominationFilmViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=nomination-film-view.component.spec.js.map