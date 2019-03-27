import { Observable ,  Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { AppUser } from "../resources/app-user";

@Injectable()
export class AuthenticationService {

    url =  `${environment.apiUrl}/user`;

    constructor(private http: HttpClient) {
    }
    
}