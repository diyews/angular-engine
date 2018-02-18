import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HomeComponent } from "~/lighthouse/home/home.component";

describe('Home test', () => {
    let comp: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent]
        });

        fixture = TestBed.createComponent(HomeComponent);

        comp = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('.home-location'));
        el = de.nativeElement;
    });

    it('HomeLocation just has \'home\' text', () => {
        fixture.detectChanges();
        expect(el.innerText).toBe('1, 2');
    });
});
