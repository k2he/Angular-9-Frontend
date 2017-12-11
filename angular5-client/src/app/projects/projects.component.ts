import { Component, OnInit } from '@angular/core';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { sideNavItem } from '../side-navi/sideNavItem'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    naviListItems: sideNavItem[] = [
                                    { name: 'All Projects', url: "/projects/all", active: true },
                                    { name: 'Create New', url: "/projects/new", active: false },
                                    { name: 'In progress Projects', url: "/projects/inprogress", active: false },
                                    { name: 'Projects Schedule', url: "", active: false },
                                    { name: 'Completed Projects', url: "", active: false }
                                  ];
    
    constructor() { }

    ngOnInit() {
    }

    onSubmit() {
        alert("on submit");
    }
}
