import {Injectable} from "@angular/core";
import {CanLoad, Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication.service";

@Injectable()
export class AuthGuard implements CanLoad {

  constructor(private router:Router, 
            private authService: AuthenticationService) {
  }

  canLoad() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
    return this.authService.isAuthenticated();
  }

}