import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ParkComponent } from "~/lighthouse/park/park.component";

describe('Park test', () => {
    let comp: ParkComponent;
    let fixture: ComponentFixture<ParkComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ParkComponent]
        });

        fixture = TestBed.createComponent(ParkComponent);

        comp = fixture.componentInstance;

        de = fixture.debugElement;
        el = de.nativeElement;
    });

    it('ParkComponent will display \'Forest park\'', () => {
        fixture.detectChanges();
        expect(el.innerText).toBe('Forest park');
    });
});
