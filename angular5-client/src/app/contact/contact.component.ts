import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';

import { ContactInfo } from '../resources/contact';
import { ContactusService } from '../api/contactus.service';
import { UtilService } from '../api/util.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    contectInfo: ContactInfo = <ContactInfo>{};
    PHONE_NUMBER_REGEX  = "^\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$";
    statusMessage: string;
    statusClass: string;
    
    @ViewChild('contactUsForm') form;
    
    constructor(private contactService: ContactusService, private utilService: UtilService) { }
    
    onSubmit(): void {
        this.statusMessage = '';
        this.utilService.deepTrim(this.contectInfo);
        this.contactService.createContactInfo(this.contectInfo)
          .subscribe(
              hero => {
                  this.displaySubmitMessage(false);
                //TODO: Need to figure out how to reset form without showing validation error message
//                  this.form.reset();
              },
              error => {
                  this.displaySubmitMessage(true);
              }
          );
    }
    
    displaySubmitMessage(hasError: boolean) {
        if (hasError) {
            this.statusMessage = "Submission Failed !!!";
            this.statusClass = "restful_call_status_failed";
        } else {
            this.statusMessage = "Submission Successful. Message inserted into database";
            this.statusClass = "restful_call_status_ok ";
        }
    }
}
