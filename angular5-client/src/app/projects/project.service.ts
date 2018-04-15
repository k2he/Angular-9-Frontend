import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { HttpResponse } from '@angular/common/http';
import { ProjectInfo } from './projectInfo';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { UtilService } from '../shared/services/util.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

@Injectable()
export class ProjectService {
    url =  `${environment.apiUrl}/projects/project`;
    
    constructor(private http: HttpClient, private util: UtilService) { }
    
    public getAllProjects(): Observable<ProjectInfo[]>{
        return this.http.get<ProjectInfo[]>(this.url)
        .pipe(
            tap(_ => this.log("ProjectService.getAllProjects() called")),
            catchError(this.handleError)
        );
    }

    public getAllProjectList(): Observable<ProjectInfo[]> {
        return this.http.get<ProjectInfo[]>(this.url)
                .catch((error:any) => this.handleError(error));
    }
    
    public createProjectInfo(info: ProjectInfo): Observable<ProjectInfo> {
        return this.http.post<ProjectInfo>(this.url, info, this.util.httpOptions)
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
        return this.http.delete(`${this.url}/${id}`)
        .catch((error:any) => this.handleError(error));
    }
    
    public updateProjectInfo(info: ProjectInfo) {
      // will use this.http.put()
    }


    handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
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
