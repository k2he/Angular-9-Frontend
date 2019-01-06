import { NgModule } from '@angular/core';
import { ProjectsRoutingModule } from './projects-routing.module';
import { AllprojectsComponent } from './allprojects/allprojects.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { InprogressprojectsComponent } from './inprogressprojects/inprogressprojects.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from "./projects.component";

import { UtilService } from '../api/util.service';
import { ProjectService } from "../api/project.service";
import { CustomCurrencyPipe } from '../shared/pipes/custom-currency.pipe';
import { MaterialModuleModule } from '../material-module/material-module.module'

@NgModule({
  imports: [
        SharedModule,
        MaterialModuleModule,
        ProjectsRoutingModule,
  ],
  declarations: [
        ProjectsComponent,
        AllprojectsComponent,
        NewprojectComponent, 
        InprogressprojectsComponent, 
  ],
  providers: [
        ProjectService,
        UtilService,
        CustomCurrencyPipe
  ]
})
export class ProjectsModule { }
