import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { AllprojectsComponent } from './allprojects/allprojects.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { InprogressprojectsComponent } from './inprogressprojects/inprogressprojects.component';
import { EditprojectComponent } from './editproject/editproject.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatDatepickerModule } from '@angular/material';
import { ProjectService } from "./project.service";
import { ErrorStateMatcher } from '@angular/material/core';
import { MatTableModule, MatSortModule } from '@angular/material';
import { CustomCurrencyPipe } from '../pipes/custom-currency.pipe';
import { CustomCurrencyFormatterDirective } from '../directives/custom-currency-formatter.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    ProjectsRoutingModule
  ],
  declarations: [
                     AllprojectsComponent,
                     NewprojectComponent, 
                     InprogressprojectsComponent, 
                     EditprojectComponent,
                     CustomCurrencyPipe,
                     CustomCurrencyFormatterDirective,
                 ],
  providers: [ProjectService, CustomCurrencyPipe],
})
export class ProjectsModule { }
