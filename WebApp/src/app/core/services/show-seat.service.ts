import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchModel } from '../model/search.model';

@Injectable()

export class ShowSeatService {

    homeAddress = 'api/ShowSeat';
    apiHost = "http://localhost:59239";
    constructor(public httpClient: HttpClient) {
    }

    getShowSeats(data: SearchModel): Observable<any> {
        return this.httpClient.post(`${this.apiHost}/${this.homeAddress}/GetShowSeats`, data);
    }
}