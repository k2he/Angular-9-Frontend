
import { throwError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { UtilService } from './util.service';

import { ContactInfo } from '../resources/contact';

const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

@Injectable()
export class ContactusService {
    url =  `${environment.apiUrl}/contacts`;
    
    constructor(private http: HttpClient, private utilService: UtilService) { }
    
    public getAllContactInfos(): Observable<ContactInfo[]>{
        return this.http.get<ContactInfo[]>(this.url);
    }

    public createContactInfo(info: ContactInfo): Observable<ContactInfo> {
        return this.http.post<ContactInfo>(this.url, info, this.utilService.httpOptions);
    }

    public getContactInfoById(todoId: number) {
      // will use this.http.get()
    }

    public updateContactInfo(info: ContactInfo) {
      // will use this.http.put()
    }

    public deleteContactInfoById(infoId: number) {
      // will use this.http.delete()
    }
}
