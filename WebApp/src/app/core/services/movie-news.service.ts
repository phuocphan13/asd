import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieNewsService {

  homeAddress = 'api/MovieNews';
  apiHost = "http://localhost:59239";
  constructor(public httpClient: HttpClient){ 
   }

  getAll() :Observable<any> {
    return this.httpClient.get(`${this.apiHost}/${this.homeAddress}/GetAll`);
  }

  getById(id):Observable<any> {
    return this.httpClient.get(`${this.apiHost}/${this.homeAddress}/GetById/${id}`);
  }

  getSideNews():Observable<any> {
    return this.httpClient.get(`${this.apiHost}/${this.homeAddress}/GetSideNews`);
  }

}
