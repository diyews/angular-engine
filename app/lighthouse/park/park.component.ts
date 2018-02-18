import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './park.component.html'
})

export class ParkComponent implements OnInit {
    name: string = 'Forest';
    constructor() {
    }

    ngOnInit() {
    }
}
