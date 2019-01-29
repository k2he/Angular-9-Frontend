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


//Authentication related constants
export const OAuth2_RESPONSE: string = 'OAuth2Response';
export const JWT_TOKEN: string = 'jwtToken';
export const CURRENT_USER: string = 'currentUser';

@Injectable()
export class AuthenticationService {
    
    private authEvents: Subject<AuthenticationEvent>;
    url =  `${environment.apiUrl}/login`;

    constructor(private http: HttpClient) {
        this.authEvents = new Subject<AuthenticationEvent>();
    }

    socialLogin(loginType: string) {
        let ssoUrl = `${environment.DEFAULT_AUTH_URL}`;
        if (loginType === "google") {
            ssoUrl = `${environment.GOOGLE_AUTH_URL}`;
        } else if (loginType === "facebook") {
            ssoUrl = `${environment.FACEBOOK_AUTH_URL}`;
        } else if (loginType === "github") {
            ssoUrl = `${environment.GITHUB_AUTH_URL}`;
        }
        window.location.href = ssoUrl;
    }

    login(username: string, password: string) {
        const body = {
            username: username,
            password: password,
        }
        return this.http.post<AuthResponse>(this.url, body).do(response => {
            this.setAuthInfo(response.token, response.user);
            this.triggerLogedinAction();
        });
    }

    triggerLogedinAction() {
        this.authEvents.next(new LoginAction());
    }

    logout(): void {
        localStorage.removeItem(JWT_TOKEN);
        localStorage.removeItem(CURRENT_USER);
        this.authEvents.next(new LogoutAction());
    }

    isAuthenticated(): boolean {
        // console.log("isAuthenticated() called with value:" + localStorage.getItem('jwtToken') );
        return localStorage.getItem(JWT_TOKEN) != null;
    }

    saveOauth2Repsonse(responseString: string) {
        let response: AuthResponse = JSON.parse(responseString);
        if (response) {
            this.setAuthInfo(response.token, response.user);
        }
        this.triggerLogedinAction();
    }

    setAuthInfo(token: string, user: AppUser) {
        localStorage.setItem(JWT_TOKEN, token);
        localStorage.setItem(CURRENT_USER, JSON.stringify(user));
    }

    getAuthToken(): String {
        return localStorage.getItem(JWT_TOKEN);
    }

    getCurrentUser(): AppUser {
        return JSON.parse(localStorage.getItem(CURRENT_USER));
    }
    
    get events(): Observable<AuthenticationEvent> {
        return this.authEvents;
    }
}