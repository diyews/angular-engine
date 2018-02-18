import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParkComponent } from './park.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'park', component: ParkComponent }
        ])
    ],
    exports: [RouterModule]
})
export class ParkRoutingModule {
}
