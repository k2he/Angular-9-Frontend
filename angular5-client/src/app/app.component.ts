import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
       trigger('showUp', [
         transition('void => *', [
           style({
             opacity: 0.2
           }),
           animate('900ms')
         ])
       ])
  ]
})
export class AppComponent {
  title = 'app';
}
