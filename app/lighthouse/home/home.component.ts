import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    homeLocation: string = '';

    constructor() {
    }

    ngOnInit() {
        this.setHomeLocation();
    }

    setHomeLocation() {
        this.homeLocation = '1, 2';
    }
}
