import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchModel } from '../model/search.model';
import { SearchDataModel } from '../model/payment/search-data.model';

@Injectable()

export class MovieService {

    homeAddress = 'api/Movie';
    apiHost = "http://localhost:59239";
    constructor(public httpClient: HttpClient) {
    }

    getListMovies(data: SearchModel): Observable<any> {
        return this.httpClient.post(`${this.apiHost}/${this.homeAddress}/GetListMovies`, data);
    }
    getListData(): Observable<any> {
        return this.httpClient.get(`${this.apiHost}/${this.homeAddress}/GetListData`);
    }
}
