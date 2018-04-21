import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Http, RequestOptionsArgs, RequestOptions, Response, Headers} from "@angular/http";

// const jwtTokenName = 'jwtToken';
const getAuthToken = (options: RequestOptionsArgs = {}) => {
    let newOptions = new RequestOptions({}).merge(options);
    let newHeaders = new Headers(newOptions.headers);
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {//If exist
        newHeaders.set('authorization', `Bearer ${jwtToken}`);
    }
    newOptions.headers = newHeaders;
    return newOptions;
};

@Injectable()
export class JsonHttp {

    constructor(private http: Http) { }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.get(url, getAuthToken(options));
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.post(url, body, getAuthToken(options));
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.put(url, body, getAuthToken(options));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.delete(url, getAuthToken(options));
    }

    patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.patch(url, body, getAuthToken(options));
    }

    head(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.head(url, getAuthToken(options));
    }
}