import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
       trigger('flyIn', [
         transition('void => *', [
           style({
             opacity: 0.5,
             transform: 'translateX(160%)'
           }),
           animate('900ms cubic-bezier(0.25, 0.1, 0.25, 1)')
         ])
       ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
