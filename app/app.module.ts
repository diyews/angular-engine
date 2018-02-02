/**
 * Created by diyews on 2017/12/20.
 *
 * Version 1.0.0
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './lighthouse/home/home.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent }
        ]),
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
