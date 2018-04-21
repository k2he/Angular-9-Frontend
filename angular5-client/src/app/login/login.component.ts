import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../core/service/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;

  constructor(private router : Router,
              private authService: AuthenticationService) { }

  ngOnInit() {
  }

  private login() : void {
    this.authService.login(this.username, this.password)
            .subscribe(() => {
                this.router.navigate(['/home']);
            }, e => this.handleError(e));
  }

  //Need figure out how to handle error handle show on page
  private handleError(error) {
    switch (error.status) {
        case 401:
            alert("401");
    }
}

}
