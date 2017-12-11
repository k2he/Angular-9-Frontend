import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { ProjectInfo } from './projectInfo';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { UtilService } from '../util.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

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

    public createProjectInfo(info: ProjectInfo): Observable<ProjectInfo> {
        return this.http.post<ProjectInfo>(this.url, info, this.util.httpOptions)
                .pipe(
                    tap(_ => this.log("ProjectService.createProjectInfo() called")),
                    catchError(this.handleError)
                );
    }

    public getProjectInfoById(todoId: number) {
      // will use this.http.get()
    }

    public updateProjectInfo(info: ProjectInfo) {
      // will use this.http.put()
    }

    public deleteProjectInfo(info: ProjectInfo) {
        const userID = 'testUser1';//This should get from session
        info.statusId = environment.project_deleted_status;
        info.lastupdatedBy = userID;
        this.updateProjectInfo(info);
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
      console.error('HeroService: ' + message);
    }
}
