import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { environment } from '../../environments/environment';
import 'rxjs/Rx';

export class LoginAction {
}
export class LogoutAction {
}
export type AuthenticationEvent = LoginAction | LogoutAction;


@Injectable()
export class AuthenticationService {

    private authEvents: Subject<AuthenticationEvent>;
    url =  `${environment.apiUrl}/login`;

    constructor(private http: Http) {
        this.authEvents = new Subject<AuthenticationEvent>();
    }

    login(username: string, password: string) {
        const body = {
            username: username,
            password: password,
        }
        return this.http.post(this.url, body).do((response : Response) => {
            localStorage.setItem('jwtToken', response.json().token);
            this.authEvents.next(new LoginAction());
        });
    }

    logout(): void {
        localStorage.removeItem('jwtToken');
        this.authEvents.next(new LogoutAction());
    }

    isAuthenticated(): boolean {
        // console.log("isAuthenticated() called with value:" + localStorage.getItem('jwtToken') );
        return localStorage.getItem('jwtToken') != null;
    }

    getAuthToken(): String {
        return localStorage.getItem('jwtToken');
    }

    getCurrentUser() {

    }
    
    get events(): Observable<AuthenticationEvent> {
        return this.authEvents;
    }
}