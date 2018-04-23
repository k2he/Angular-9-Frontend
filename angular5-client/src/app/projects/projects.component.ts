import { Component, OnInit } from '@angular/core';
import { sideNavItem } from '../shared/side-navi/side-navi.types'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    //TODO: later can load the list from database
    naviListItems: sideNavItem[] = [
                                    { name: 'All Projects', url: "/projects/all", active: true },
                                    { name: 'Create New', url: "/projects/new", active: true },
                                    { name: 'In progress Projects', url: "/projects/inprogress", active: false },
                                    { name: 'Projects Schedule', url: "", active: false },
                                    { name: 'Completed Projects', url: "", active: false }
                                  ];
    
    constructor() { }

    ngOnInit() {
    }
}
