import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpSpinnerInterceptor implements HttpInterceptor{
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //    Console.log("HttpSpinnerInterceptor request called");
        //TODO: Trying to figure out to show spinner for every http request call and then hide it when complete
        return next.handle(req).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                // Console.log("HttpSpinnerInterceptor response called");
            }
        });
    }
}
