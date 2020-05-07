import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { TestApiResult } from '../resources/test-apis-result';
import APIROUTES from '../config/api-routes';



@Injectable()
export class TestApisServiceService {

  public static ROUTES = {
    tests: `${environment.apiPath}${APIROUTES.tests}`
  };

  constructor(private http: HttpClient) { }

  public getTestRetryFail(): Observable<TestApiResult> {
    const url = `${TestApisServiceService.ROUTES.tests}/retry-fail`;

    return this.http.get<TestApiResult>(url);
  }

  public getTestRetrySuccess(): Observable<TestApiResult> {
    const url = `${TestApisServiceService.ROUTES.tests}/retry-success`;

    return this.http.get<TestApiResult>(url);
  }

  public getTestCircuitBreaker(): Observable<TestApiResult> {
    const url = `${TestApisServiceService.ROUTES.tests}/circuit-breaker`;

    return this.http.get<TestApiResult>(url);
  }
}
