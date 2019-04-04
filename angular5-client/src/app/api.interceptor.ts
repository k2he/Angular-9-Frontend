import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from "@angular/router";

import { AuthenticationService } from './api/authentication.service';
import STORAGEKEYS from './config/storage-keys';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    constructor(private injector: Injector, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const authService = this.injector.get(AuthenticationService);
        let token = authService.getAuthToken();
        if (token) {
            request = request.clone({
                headers: request.headers.set('Authorization', 'Bearer ' + token)
            });
        }

        // Handler API call failure
        return next.handle(request).pipe(
            catchError((error, caught) => {
                //intercept the respons error and displace it to the console
                console.log(error);
                this.handleAuthError(error);
                return of(error);
            }) as any);
    }


    private handleAuthError(error: HttpErrorResponse): Observable<any> {
        //handle your auth error or rethrow
        if (error.status === 401) {
            // Delete Invalid Token and User Information
            localStorage.removeItem(STORAGEKEYS.JWT_TOKEN);
            localStorage.removeItem(STORAGEKEYS.CURRENT_USER);
            console.log('Token Expired. Handled error ' + error.status);
            this.router.navigate([`/login`]);

            //Since we already handled it, we don't want error message show up on screen.
            return of(error.message);
        }
        throw error;
    }
}