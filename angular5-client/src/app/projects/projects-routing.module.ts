import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllprojectsComponent } from './allprojects/allprojects.component';
import { NewprojectComponent } from "./newproject/newproject.component";
import { InprogressprojectsComponent } from "./inprogressprojects/inprogressprojects.component";
import { ProjectsComponent } from "./projects.component";

const routes: Routes = [
                        {
                            path: '',
                            component: ProjectsComponent,
                            children: [
                              {
                                  path: '',
                                  redirectTo: 'all',
                                  pathMatch: 'full',
                              },
                              {
                                  path: 'all',
                                  component: AllprojectsComponent,  
                              },
                              {
                                  path: 'edit/:id',
                                  component: NewprojectComponent,  
                              },
                              {
                                  path: 'new',
                                  component: NewprojectComponent,  
                              },
                              {
                                  path: 'inprogress',
                                  component: InprogressprojectsComponent,
                              }
                                
                            ]
                          }
                        ];
        

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
