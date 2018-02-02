import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SchoolComponent } from './components/school.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'school', component: SchoolComponent }
        ])
    ],
    exports: [RouterModule]
})
export class SchoolRoutingModule {
}
