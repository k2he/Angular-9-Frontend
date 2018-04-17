import { NgModule } from '@angular/core';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatListModule} from '@angular/material/list';
import { MatTableModule, MatSortModule } from '@angular/material';
import { MatNativeDateModule, MatDatepickerModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';

import { ProjectsRoutingModule } from './projects-routing.module';
import { AllprojectsComponent } from './allprojects/allprojects.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { InprogressprojectsComponent } from './inprogressprojects/inprogressprojects.component';
import { EditprojectComponent } from './editproject/editproject.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from "./projects.component";

import { ProjectService } from "./project.service";
import { CustomCurrencyPipe } from '../shared/pipes/custom-currency.pipe';

@NgModule({
  imports: [
        SharedModule,
        
        MatInputModule,
        MatFormFieldModule,
        MatListModule,
        MatTableModule,
        MatSortModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatMenuModule,
        
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
        CustomCurrencyPipe
  ]
})
export class ProjectsModule { }
