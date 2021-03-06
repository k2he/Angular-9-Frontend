import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestApisComponent } from './test-apis.component';
import { ErrorHandingComponent } from './error-handing/error-handing.component';
import { TestApisRoutingModule } from './test-apis-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { TestApisServiceService } from '../api/test-apis-service.service';

@NgModule({
  imports: [
    SharedModule,
    MaterialModuleModule,
    TestApisRoutingModule
  ],
  declarations: [
    TestApisComponent,
    ErrorHandingComponent
  ],
  providers: [
    TestApisServiceService
  ]
})
export class TestApisModule { }
