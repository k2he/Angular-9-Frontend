import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { ProjectsRoutingModule } from './projects-routing.module';
import { AllprojectsComponent } from './allprojects/allprojects.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { InprogressprojectsComponent } from './inprogressprojects/inprogressprojects.component';
import { EditprojectComponent } from './editproject/editproject.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from "./projects.component";
import { SideNaviModule} from '../side-navi/side-navi.module';

import { ProjectService } from "./project.service";
import { CustomCurrencyPipe } from '../shared/pipes/custom-currency.pipe';

@NgModule({
  imports: [
        CommonModule,
        SharedModule,
        ProjectsRoutingModule,
//        SideNaviModule,
  ],
  declarations: [
        ProjectsComponent,
        AllprojectsComponent,
        NewprojectComponent, 
        InprogressprojectsComponent, 
        EditprojectComponent
   ],
  providers: [
        ProjectService,
        CustomCurrencyPipe
  ]
})
export class ProjectsModule { }
