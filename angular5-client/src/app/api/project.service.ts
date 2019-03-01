import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { HttpResponse } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { ProjectInfo } from '../resources/project';

@Injectable()
export class ProjectService {
    url =  `${environment.apiUrl}/projects`;
    
    constructor(private http: HttpClient) { }
    
    public getAllProjects(): Observable<ProjectInfo[]>{
        return this.http.get<ProjectInfo[]>(this.url)
        .pipe(
            tap(_ => this.log("ProjectService.getAllProjects() called")),
            catchError(this.handleError)
        );
    }
    
    public createProjectInfo(info: ProjectInfo): Observable<ProjectInfo> {
        return this.http.post<ProjectInfo>(this.url, info)
                .pipe(
                    tap(_ => this.log("ProjectService.createProjectInfo() called")),
                    catchError(this.handleError)
                );
    }

    public getProjectInfoById(id: number): Observable<ProjectInfo> {
        return this.http.get<ProjectInfo>(`${this.url}/${id}`)
        .catch((error:any) => this.handleError(error));
    }

    public deleteProjectInfoById(id: string | number): Observable<ProjectInfo> {
        return this.http.delete<ProjectInfo>(`${this.url}/${id}`)
        .catch((error:any) => this.handleError(error));
    }
    
    public updateProjectInfo(info: ProjectInfo) {
        return this.http.post<ProjectInfo>(`${this.url}`, info)
        .catch((error:any) => this.handleError(error));
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
        this.log(errMsg);
        return Observable.throw(errMsg);
    }
    
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      console.log(message);
    }
}
