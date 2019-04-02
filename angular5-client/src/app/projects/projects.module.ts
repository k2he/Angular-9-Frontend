import { NgModule } from '@angular/core';
import { ProjectsRoutingModule } from './projects-routing.module';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { InProgressProjectsComponent } from './in-progress-projects/in-progress-projects.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from "./projects.component";

import { UtilService } from '../api/util.service';
import { ProjectService } from "../api/project.service";
import { CustomCurrencyPipe } from '../shared/pipes/custom-currency.pipe';
import { MaterialModuleModule } from '../material-module/material-module.module';

@NgModule({
  imports: [
        SharedModule,
        MaterialModuleModule,
        ProjectsRoutingModule,
  ],
  declarations: [
        ProjectsComponent,
        AllProjectsComponent,
        NewProjectComponent, 
        InProgressProjectsComponent
  ],
  providers: [
        ProjectService,
        UtilService,
        CustomCurrencyPipe
  ]
})
export class ProjectsModule { }
