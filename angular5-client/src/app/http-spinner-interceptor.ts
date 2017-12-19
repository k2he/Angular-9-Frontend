import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpSpinnerInterceptor implements HttpInterceptor{
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//        alert("HttpSpinnerInterceptor request called");
        return next.handle(req).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
//                alert("HttpSpinnerInterceptor response called");
            }
        });
    }
}
