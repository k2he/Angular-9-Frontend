import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';

import { AuthenticationService } from "../core/service/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('showUp', [
      transition('void => *', [
        style({
          opacity: 0.3
        }),
        animate('200ms')
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;
  showSpinner: boolean;
  loginFailErrorMessage: string;

  constructor(private router : Router,
              private authService: AuthenticationService) { }

  ngOnInit() {
  }

  private login() : void {
    this.showSpinner = true;
    this.loginFailErrorMessage = "";
    
    this.authService.login(this.username, this.password)
            .subscribe(() => {
              this.showSpinner = false;
                this.router.navigate(['/home']);
            }, e => this.handleError(e));
  }

  //Need figure out how to get correct error so we can highlight corrsponding input box.
  private handleError(error) {
    switch (error.status) {
        case 401:
          this.loginFailErrorMessage = "Login failed. Please make sure username and password is correct.";
    }
}

}
