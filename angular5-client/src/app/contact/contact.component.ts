import { Component, OnInit } from '@angular/core';
import { ContactInfo } from './contactInfo'
import {FormControl, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    contectInfo: ContactInfo = new ContactInfo();
    PHONE_NUMBER_REGEX  = "^\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$";
    submitOK = false;
    
    constructor() { }
    
    onSubmit() {
      alert("Name:" + this.contectInfo.name);
      //      this.http.
      this.submitOK = true;
    }
}
