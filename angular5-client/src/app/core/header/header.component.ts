import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from "@angular/router";

import { TranslateService } from '@ngx-translate/core';
import { NewProjectCountService } from '../../api/newprojectcount.service';
import { AuthenticationService } from '../../api/authentication.service';
import { AdminGuard } from '../../guard/admin-guard';
import { AppUser } from '../../resources/app-user';
import STORAGEKEYS from '../../config/storage-keys';
import { UtilService } from '../../services/util.service';

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
  currentLanguage: string;

  constructor(private authService: AuthenticationService,
    private router: Router,
    private guard: AdminGuard,
    private translate: TranslateService,
    private utilService: UtilService,
    private projectService: NewProjectCountService) {
    this.adminGuard = guard;
    this.currentLanguage = localStorage.getItem(STORAGEKEYS.LANGUAGE_CHOOSEN);
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

  changeLanguage() {
    if (this.isCurrentLanEnglish()) {
      this.currentLanguage = 'fr';
    } else {
      this.currentLanguage = 'en';
    }
    //Set Choosen Language
    localStorage.setItem(STORAGEKEYS.LANGUAGE_CHOOSEN, this.currentLanguage);
    this.translate.use(this.currentLanguage);
  }

  isCurrentLanEnglish(): boolean {
    return this.utilService.isCurrentLocalEnglish();
  }
}
