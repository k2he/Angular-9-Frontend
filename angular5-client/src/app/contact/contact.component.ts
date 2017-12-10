import { Component, OnInit } from '@angular/core';
import { ContactInfo } from './contactInfo'
import {FormControl, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {ContactusService} from './contactus.service';
import { UtilService } from '../util.service';
import { MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    contectInfo: ContactInfo = new ContactInfo();
    PHONE_NUMBER_REGEX  = "^\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$";
    statusMessage: string;
    statusClass: string;
    
    constructor(private contactService: ContactusService, private utilService: UtilService) { }
    
    onSubmit(): void {
        this.statusMessage = '';
        this.utilService.deepTrim(this.contectInfo);
        this.contactService.createContactInfo(this.contectInfo)
          .subscribe(
              hero => {
                  this.displaySubmitMessage(false);
              },
              error => {
                  this.displaySubmitMessage(true);
              }
          );
    }
    
    displaySubmitMessage(hasError: boolean) {
        if (hasError) {
            this.statusMessage = "Submission Failed !!!";
            this.statusClass = "status-failed";
        } else {
            this.statusMessage = "Submission Successful. Message inserted into database";
            this.statusClass = "status-ok";
        }
    }
    
    clearSubmitMessage() {
        
    }
}
