import { Component, OnInit } from '@angular/core';

import { SideNavItem } from '../shared/side-navi/side-navi.types'

@Component({
  selector: 'app-test-apis',
  templateUrl: './test-apis.component.html',
  styleUrls: ['./test-apis.component.css']
})
export class TestApisComponent implements OnInit {

  //TODO: later can load the list from database
  naviListItems: SideNavItem[] = [
    { name: 'Error Handing', url: "/test-apis/error-handing", active: true },
    { name: 'Others', url: "/test-apis/others", active: false }
  ];

  constructor() { }

  ngOnInit() {
  }

}
