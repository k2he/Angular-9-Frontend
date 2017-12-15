import { NgModule } from '@angular/core';
import { ProjectsRoutingModule } from './projects-routing.module';
import { AllprojectsComponent } from './allprojects/allprojects.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { InprogressprojectsComponent } from './inprogressprojects/inprogressprojects.component';
import { EditprojectComponent } from './editproject/editproject.component';

import { ProjectService } from "./project.service";
import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from "./projects.component";

@NgModule({
  imports: [
        SharedModule,
        ProjectsRoutingModule
  ],
  declarations: [
//        ProjectsComponent,
        AllprojectsComponent,
        NewprojectComponent, 
        InprogressprojectsComponent, 
        EditprojectComponent
                 ],
  providers: [ProjectService]
})
export class ProjectsModule { }
