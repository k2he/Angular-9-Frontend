import { NgModule } from '@angular/core';
import { MaterialModuleModule } from '../material-module/material-module.module'

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from "./contact.component";
import { ContactusService } from './contactus.service';

@NgModule({
  imports: [
    SharedModule,
    MaterialModuleModule,
    ContactRoutingModule,
  ],
  declarations: [
    ContactComponent
  ],
  providers: [ContactusService]
})
export class ContactModule { }
