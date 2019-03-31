import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from "@angular/router";

import { NewProjectCountService } from '../../api/newprojectcount.service';
import { AuthenticationService } from '../../api/authentication.service';
import { AdminGuard } from '../guard/admin-guard';
import { AppUser } from '../../resources/app-user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
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
  user: AppUser;
  adminGuard: AdminGuard;

  constructor(private authService: AuthenticationService,
              private router: Router,
              private guard: AdminGuard,
              private projectService: NewProjectCountService) { 
    this.adminGuard = guard;
  }
  
  ngOnInit() {
      this.projectService.events$.forEach(result => {
          this.newProjectNum++
      });
      this.loadData();
      
      this.authService.events.subscribe(() => {
        this.loadData();
      });
  }

  loadData() {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.user = this.authService.getCurrentUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
