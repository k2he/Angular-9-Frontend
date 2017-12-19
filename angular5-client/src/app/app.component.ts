import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

import { NewProjectCountService } from './services/newprojectcount.service';

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
export class AppComponent implements OnInit {
  title = 'app';
  newProjectNum = 0;
  
  constructor(private projectService: NewProjectCountService) { }
  
  ngOnInit() {
      this.projectService.events$.forEach(result => {
          this.newProjectNum++
      });
  }
}
