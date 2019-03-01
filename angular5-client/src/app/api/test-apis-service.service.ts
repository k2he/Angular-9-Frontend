import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { TestApiResult } from '../resources/test-apis-result';

@Injectable()
export class TestApisServiceService {
  url =  `${environment.apiUrl}/tests`;

  constructor(private http: HttpClient) { }

  public getTestRetryFail(): Observable<TestApiResult>{
    const url = `${this.url}/retry-fail`;

    return this.http.get<TestApiResult>(url)
    .pipe(
        tap(_ => console.log("TestApisServiceService.getTestRetryFail() called")),
        catchError(this.handleError)
    );
  }

  public getTestRetrySuccess(): Observable<TestApiResult>{
    const url = `${this.url}/retry-success`;
    
    return this.http.get<TestApiResult>(url)
    .pipe(
        tap(_ => console.log("TestApisServiceService.getTestRetrySuccess() called")),
        catchError(this.handleError)
    );
  }

  public getTestCircuitBreaker(): Observable<TestApiResult>{
    const url = `${this.url}/circuit-breaker`;
    
    return this.http.get<TestApiResult>(url)
    .pipe(
        tap(_ => console.log("TestApisServiceService.getTestCircuitBreaker() called")),
        catchError(this.handleError)
    );
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
}
}
