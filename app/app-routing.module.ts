import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './lighthouse/home/home.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomeComponent }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
