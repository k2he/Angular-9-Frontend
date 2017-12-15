import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from "./contact.component";
import { ContactusService } from './contactus.service';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent
  ],
  providers: [ContactusService]
})
export class ContactModule { }
