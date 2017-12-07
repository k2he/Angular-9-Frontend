import { Component, OnInit } from '@angular/core';
import { ContactInfo } from './contactInfo'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contectInfo: ContactInfo = new ContactInfo();

  constructor() { }

  onSubmit() {
      alert("Name:" + this.contectInfo.name);
//      this.http.
  }
}
