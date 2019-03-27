import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { TestApiResult } from '../resources/test-apis-result';

@Injectable()
export class TestApisServiceService {
  url =  `${environment.apiUrl}/tests`;

  constructor(private http: HttpClient) { }

  public getTestRetryFail(): Observable<TestApiResult>{
    const url = `${this.url}/retry-fail`;

    return this.http.get<TestApiResult>(url);
  }

  public getTestRetrySuccess(): Observable<TestApiResult>{
    const url = `${this.url}/retry-success`;
    
    return this.http.get<TestApiResult>(url);
  }

  public getTestCircuitBreaker(): Observable<TestApiResult>{
    const url = `${this.url}/circuit-breaker`;
    
    return this.http.get<TestApiResult>(url);
  }
}
