import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthenticationService } from "../service/authentication.service";

@Injectable()
export class PublicPageGuard implements CanActivate {

  constructor(private router: Router, 
            private authService: AuthenticationService) {
  }

  canActivate() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
    return !this.authService.isAuthenticated();
  }

}