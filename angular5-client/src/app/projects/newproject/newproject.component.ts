import { Component, OnInit } from '@angular/core';
import { ProjectInfo } from "../projectInfo";
import { ProjectService } from '../project.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from '../../util.service';
import { CustomCurrencyFormatterDirective } from "../../directives/custom-currency-formatter.directive";

const NAME_FIELD_MIN: number = 3;

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {
    projectInfo: ProjectInfo = new ProjectInfo();
    projectForm: FormGroup;
    statusMessage: string;
    statusClass: string;
    
    
    constructor(private fb: FormBuilder, private utilService: UtilService, private projectService: ProjectService) { 
        this.projectForm = fb.group({ 
            'name': ['', Validators.compose([Validators.required, Validators.minLength(NAME_FIELD_MIN), Validators.maxLength(100)])], 
            'skills': ['', null],
            'dueDate' : ['', Validators.required],
            'cost': ['', Validators.compose([Validators.required, Validators.max(99999999999)])],
            'description': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(500)])]
        });
    
    }

    ngOnInit() {
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
