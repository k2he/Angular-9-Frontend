import { Component, OnInit } from '@angular/core';
import { ProjectInfo } from "../projectInfo";
import { ProjectService } from '../project.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from '../../util.service';
import { CustomCurrencyFormatterDirective } from "../../shared/directives/custom-currency-formatter.directive";
import { ActivatedRoute } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';

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
    
    
    constructor(private fb: FormBuilder, 
                private utilService: UtilService, 
                private projectService: ProjectService,
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
        }
    }
    
    setProjectInfo(info: ProjectInfo) {
        if(info) {
            this.projectInfo = info;
            this.title = "Edit Project Detail";
        }
        console.log("setProjectInfo:" + this.projectInfo);
    }
    
    onSubmit() {
        this.statusMessage = '';
        this.utilService.deepTrim(this.projectInfo);
        this.projectService.createProjectInfo(this.projectInfo)
          .subscribe(
              hero => {
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
            this.statusMessage = "Submission Successful. Message inserted into database";
            this.statusClass = "restful_call_status_ok ";
        }
    }
}
