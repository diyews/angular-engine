import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { SchoolComponent } from "~/lighthouse/school/school.component";

describe('School test', () => {
    let comp: SchoolComponent;
    let fixture: ComponentFixture<SchoolComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SchoolComponent]
        });

        fixture = TestBed.createComponent(SchoolComponent);

        comp = fixture.componentInstance;

        de = fixture.debugElement;
        el = de.nativeElement;
    });

    it('SchoolComponent will display \'school\'', () => {
        fixture.detectChanges();
        expect(el.innerText).toBe('school');
    });
});
