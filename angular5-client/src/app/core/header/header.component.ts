import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from "@angular/router";

import { NewProjectCountService } from '../service/newprojectcount.service';
import { AuthenticationService } from "../service/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
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
export class HeaderComponent implements OnInit {

  newProjectNum = 0;
  isLoggedIn: boolean;

  constructor(private authService: AuthenticationService,
              private router: Router,
              private projectService: NewProjectCountService) { }
  
  ngOnInit() {
      this.projectService.events$.forEach(result => {
          this.newProjectNum++
      });

      this.isLoggedIn = this.authService.isAuthenticated();
      this.authService.events.subscribe(() => {
        this.isLoggedIn = this.authService.isAuthenticated();
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
