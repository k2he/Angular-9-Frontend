import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { HttpClient} from '@angular/common/http';

import { environment } from '../../environments/environment';
import 'rxjs/Rx';

import { AppUser } from '../resources/app-user';
import { AuthResponse } from '../resources/auth-response';

export class LoginAction {
}
export class LogoutAction {
}
export type AuthenticationEvent = LoginAction | LogoutAction;


@Injectable()
export class AuthenticationService {

    private authEvents: Subject<AuthenticationEvent>;
    url =  `${environment.apiUrl}/login`;

    constructor(private http: HttpClient) {
        this.authEvents = new Subject<AuthenticationEvent>();
    }

    login(username: string, password: string) {
        const body = {
            username: username,
            password: password,
        }
        return this.http.post<AuthResponse>(this.url, body).do(response => {
            localStorage.setItem('jwtToken', response.token);
            localStorage.setItem('currentUser', JSON.stringify(response.user));
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

    getCurrentUser(): AppUser {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
    
    get events(): Observable<AuthenticationEvent> {
        return this.authEvents;
    }
}