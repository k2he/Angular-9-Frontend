import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { SideNavItem } from '../shared/side-navi/side-navi.types'

@Component({
  selector: 'app-test-apis',
  templateUrl: './test-apis.component.html',
  styleUrls: ['./test-apis.component.scss']
})
export class TestApisComponent implements OnInit {

  //TODO: later can load the list from database
  naviListItems: SideNavItem[];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.naviListItems = [
      { name: this.translate.instant('test-page.naviItems.error-handing'), url: "/test-apis/error-handing", active: true },
      { name: this.translate.instant('test-page.naviItems.other'), url: "/test-apis/others", active: false }
    ];
  }

}
