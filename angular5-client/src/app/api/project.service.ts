
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

import { ProjectInfo } from '../resources/project';

@Injectable()
export class ProjectService {
    url =  `${environment.apiUrl}/projects`;
    
    constructor(private http: HttpClient) { }
    
    public getAllProjects(): Observable<ProjectInfo[]>{
        return this.http.get<ProjectInfo[]>(this.url);
    }
    
    public createProjectInfo(info: ProjectInfo): Observable<ProjectInfo> {
        return this.http.post<ProjectInfo>(this.url, info);
    }

    public getProjectInfoById(id: number): Observable<ProjectInfo> {
        return this.http.get<ProjectInfo>(`${this.url}/${id}`);
    }

    public deleteProjectInfoById(id: string | number): Observable<ProjectInfo> {
        return this.http.delete<ProjectInfo>(`${this.url}/${id}`);
    }
    
    public updateProjectInfo(info: ProjectInfo) {
        return this.http.post<ProjectInfo>(`${this.url}`, info);
    }
}
