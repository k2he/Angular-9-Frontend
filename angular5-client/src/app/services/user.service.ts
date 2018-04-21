import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserInfo } from '../user/userInfo';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  url =  `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(this.url);
  }
}
