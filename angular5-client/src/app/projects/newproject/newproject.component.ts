import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ProjectInfo } from "../projectInfo";
import { ProjectService } from '../project.service';
import { UtilService } from '../../shared/services/util.service';
import { NewProjectCountService } from '../../services/newprojectcount.service';

const NAME_FIELD_MIN: number = 3;

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {
    projectInfo: ProjectInfo = new ProjectInfo();
    projectForm: FormGroup;
    title = "Create New Project";
    statusMessage: string;
    statusClass: string;
    isOnEdit: boolean = false;
    
    
    constructor(private fb: FormBuilder, 
                private utilService: UtilService, 
                private projectService: ProjectService,
                private service: NewProjectCountService,
                private route: ActivatedRoute) { 
        this.projectForm = fb.group({ 
            'name': ['', Validators.compose([Validators.required, Validators.minLength(NAME_FIELD_MIN), Validators.maxLength(100)])], 
            'skills': ['', null],
            'dueDate' : ['', Validators.required],
            'cost': ['', Validators.compose([Validators.required, Validators.max(99999999999)])],
            'description': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(500)])]
        });
    
    }

    ngOnInit() {
        const productID = this.route.snapshot.params['id'];
        if (productID) {
            this.projectService.getProjectInfoById(productID)
            .subscribe(
                result => this.setProjectInfo(result)
            );
            this.isOnEdit = true;
        }
        this.isOnEdit = false;
    }
    
    setProjectInfo(info: ProjectInfo) {
        if(info) {
            this.projectInfo = info;
            this.title = "Edit Project Detail";
        }
    }
    
    onSubmit() {
        this.statusMessage = '';
        this.utilService.deepTrim(this.projectInfo);
        this.projectService.createProjectInfo(this.projectInfo)
          .subscribe(
              () => {
                  this.displaySubmitMessage(false);
              },
              error => {
                  this.displaySubmitMessage(true);
              }
          );
    }

    displaySubmitMessage(hasError: boolean) {
        if (hasError) {
            this.statusMessage = "Submission Failed !!!";
            this.statusClass = "restful_call_status_failed";
        } else {
            if (this.isOnEdit) { //Editing existing project
                this.statusMessage = "Update Successful!";
                this.statusClass = "restful_call_status_ok ";
            } else {//Add new project
                this.statusMessage = "Submission Successful!";
                this.statusClass = "restful_call_status_ok ";
                this.service.newEvent('add');
            }
        }
    }
}
