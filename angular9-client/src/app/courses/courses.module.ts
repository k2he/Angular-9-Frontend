import { NgModule } from '@angular/core';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CoursesRoutingModule
  ],
  declarations: [
    CoursesComponent
  ]
})
export class CoursesModule { }
