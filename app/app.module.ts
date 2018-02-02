/**
 * Created by diyews on 2017/12/20.
 *
 * Version 1.0.0
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './lighthouse/home/home.component';
import { SchoolModule } from './lighthouse/school/school.module';
import { AppRoutingModule } from './app-routing.module';
import { PackModule } from './lighthouse/park/park.module';

@NgModule({
    imports: [
        BrowserModule,

        SchoolModule,
        PackModule,
        AppRoutingModule
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
