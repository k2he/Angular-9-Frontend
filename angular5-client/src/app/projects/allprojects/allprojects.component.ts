import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';

import { ProjectService } from '../project.service';
import { ProjectInfo } from "../projectInfo";
import { Observable } from 'rxjs/Observable';
import { ProjectStatus } from "../projectStatus";
import { CustomCurrencyPipe } from '../../shared/pipes/custom-currency.pipe';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-allprojects',
  templateUrl: './allprojects.component.html',
  styleUrls: ['./allprojects.component.css']
})
export class AllprojectsComponent implements OnInit, AfterViewChecked {

    displayedColumns = ['name', 'description', 'due', 'skills',  'estimatedCost', 'status', 'actions'];
    dataSource;
    
    @ViewChild(MatSort) sort: MatSort;
    
    constructor(private projectService: ProjectService,
                public dialog: MatDialog) { 
    }

    ngOnInit() {
        this.fetchData();
    }

    fetchData() {
        this.projectService.getAllProjects().subscribe(
                result => this.dataSource = new MatTableDataSource(result)
         );
    }
    /**
     * Set the sort after the view init since this component will
     * be able to query its view for the initialized sort.
     */
    
    ngAfterViewChecked() {
        if (this.dataSource) {
            this.dataSource.sort = this.sort;
        }
    }
    
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    
    onDelete(projectId: string) {
        this.openDialog(projectId);
    }
    
    openDialog(projectId: string): void {
        let dialogRef = this.dialog.open(DialogComponent, {
          data: { title: 'Are you sure you want to delete selected project?', content: 'Please click Yes to continue.' }
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed. Result is ' + result);
          if(result=='yes') {
              this.processDelete(projectId);
          }
        });
    }
    
    processDelete(projectId: string) {
        this.projectService.deleteProjectInfoById(projectId).subscribe(
            result => {
                console.log(result);
                this.fetchData();
        });
    }
}
