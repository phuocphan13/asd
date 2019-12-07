import { async, TestBed } from '@angular/core/testing';
import { NominationFilmDetailComponent } from './nomination-film-detail.component';
describe('NominationFilmDetailComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NominationFilmDetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NominationFilmDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=nomination-film-detail.component.spec.js.map