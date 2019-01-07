import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../api/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const authService = this.injector.get(AuthenticationService);
        let token = authService.getAuthToken();
        if (token) {
            request = request.clone({
                headers: request.headers.set('Authorization', 'Bearer '+ token)
            });
        }

        return next.handle(request);
    }
}