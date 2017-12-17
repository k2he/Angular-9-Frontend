import { NgModule } from '@angular/core';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from "./contact.component";
import { ContactusService } from './contactus.service';

@NgModule({
  imports: [
    SharedModule,
    
    MatInputModule,
    MatFormFieldModule,
    
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent
  ],
  providers: [ContactusService]
})
export class ContactModule { }
