/**
 * Created by diyews on 2017/12/20.
 *
 * Version 1.0.0
 */
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <a routerLink="/school" routerLinkActive="active">school Center</a>
        <a routerLink="/park" routerLinkActive="active">park</a>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {

}
