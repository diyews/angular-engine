import { NgModule } from '@angular/core';

import { ParkComponent } from './park.component';
import { ParkRoutingModule } from './park-routing.module';

@NgModule({
    imports: [
        ParkRoutingModule
    ],
    exports: [],
    declarations: [ParkComponent],
    providers: []
})
export class PackModule {
}
