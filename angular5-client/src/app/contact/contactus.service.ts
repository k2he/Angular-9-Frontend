import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { ContactInfo } from './contactInfo';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { UtilService } from '../shared/services/util.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

@Injectable()
export class ContactusService {
    url =  `${environment.apiUrl}/contactus/messages`;
    
    constructor(private http: HttpClient, private utilService: UtilService) { }
    
    public getAllContactInfos(): Observable<ContactInfo[]>{
        return this.http.get<ContactInfo[]>(this.url).pipe(
            tap(_ => this.log("ContactusService.getAllContactInfos() called")),
            catchError(this.handleError)
        );
    }

    public createContactInfo(info: ContactInfo): Observable<ContactInfo> {
        return this.http.post<ContactInfo>(this.url, info, this.utilService.httpOptions)
                .pipe(
                    tap(_ => this.log("ContactusService.createContactInfo() called")),
                    catchError(this.handleError)
                );
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
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
    
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      console.error('ContactusService: ' + message);
    }
}
