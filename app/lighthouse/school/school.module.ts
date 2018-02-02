import { NgModule } from '@angular/core';

import { SchoolComponent } from './components/school.component';
import { SchoolRoutingModule } from './school-routing.module';

@NgModule({
    imports: [
        SchoolRoutingModule
    ],
    exports: [],
    declarations: [SchoolComponent],
    providers: []
})
export class SchoolModule {
}
