import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import 'rxjs/Rx';

import { AppUser } from "../resources/app-user";

@Injectable()
export class AuthenticationService {

    
    url =  `${environment.apiUrl}/user`;

    constructor(private http: HttpClient) {
    }
    
}