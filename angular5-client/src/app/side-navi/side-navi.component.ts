import { Component, OnInit, Input } from '@angular/core';
import { sideNavItem } from './sideNavItem'

@Component({
  selector: 'app-side-navi',
  templateUrl: './side-navi.component.html',
  styleUrls: ['./side-navi.component.css']
})
export class SideNaviComponent implements OnInit {

    @Input() naviItemList: sideNavItem[];

    constructor() { }

    ngOnInit() {
    }

}
