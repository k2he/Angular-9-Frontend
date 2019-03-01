import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestApisComponent } from './test-apis.component';
import { ErrorHandingComponent } from './error-handing/error-handing.component';

const routes: Routes = [
                        {
                            path: '',
                            component: TestApisComponent,
                            children: [
                              {
                                  path: '',
                                  redirectTo: 'error-handing',
                                  pathMatch: 'full',
                              },
                              {
                                  path: 'error-handing',
                                  component: ErrorHandingComponent,  
                              }
                            //   ,
                            //   {
                            //       path: 'others',
                            //       component: ManageUserComponent,  
                            //   }
                            ]
                          }
                        ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestApisRoutingModule { }
