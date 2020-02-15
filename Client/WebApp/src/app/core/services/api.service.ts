import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';
import { BaseService } from 'src/app/shared/base.service';

@Injectable()
export class ApiService extends BaseService {
    apiUrl: any = environment.apiHost;
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.authService.authorizationHeaderValue
        })
    };

    constructor(private http: HttpClient,
        private authService: AuthService) {
            super();
    }

    get(path: string, params?: HttpParams): Observable<any> {
        return this.http.get(`${this.apiUrl}${path}`, {
            params: params, headers: this.httpOptions.headers
        }).pipe(catchError(this.handleError));
    }

    post(path: string, data?: any, params?: HttpParams): Observable<any> {
        return this.http.post(
            `${this.apiUrl}${path}`,
            data,
            {
                params: params,
                headers: this.httpOptions.headers
            }
        );
    }

    put(path: string, data?: any): Observable<any> {
        return this.http.put(
            `${this.apiUrl}${path}`,
            {
                parmas: data,
                headers: this.httpOptions.headers
            }
        );
    }

    delete(path: string, params?: HttpParams): Observable<any> {
        return this.http.delete(`${this.apiUrl}${path}`, {
            params: params,
            headers: this.httpOptions.headers
        });
    }
}
