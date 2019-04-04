import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModuleModule } from '../material-module/material-module.module';

@NgModule({
  imports: [
    MaterialModuleModule,
    HomeRoutingModule,
    TranslateModule,
  ],
  declarations: [
    HomeComponent
  ],
})
export class HomeModule { }
