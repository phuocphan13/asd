import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FilmOnlineService{

  homeAddress = 'api/Film';
  apiHost = "http://localhost:59239";
  constructor(public httpClient: HttpClient) {
  }

  getAll() :Observable<any> {
    return this.httpClient.get(`${this.apiHost}/${this.homeAddress}/GetAll`);
  }
}