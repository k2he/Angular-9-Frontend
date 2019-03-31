import { Component, OnInit } from '@angular/core';

import { SideNavItem } from '../shared/side-navi/side-navi.types'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  //TODO: later can load the list from database
  naviListItems: SideNavItem[] = [
    { name: 'Manage User', url: "/admin/manage", active: true },
    { name: 'Register User', url: "/admin/register", active: true }
  ];

  constructor() { }

  ngOnInit() {
  }

}
