import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FilmOnlineService{

  homeAddress = 'api/Film';
  apiHost = "http://localhost:59239";
  constructor(public httpClient: HttpClient) {
  }

  getListFilmsCarousel() :Observable<any> {
    return this.httpClient.get(`${this.apiHost}/${this.homeAddress}/GetListFilmsCarousel`);
  }

  getListFilmsNomination() :Observable<any> {
    return this.httpClient.get(`${this.apiHost}/${this.homeAddress}/GetListFilmsNomination`);
  }

  getLoadMoreFilmNomination(numberFilmNominationCurrent: any, numberFilmNominationTake: any) :Observable<any> {
    let params = new HttpParams().set('numberFilmNominationCurrent', numberFilmNominationCurrent)
                                 .set("numberFilmNominationTake", numberFilmNominationTake);
    return this.httpClient.get(`${this.apiHost}/${this.homeAddress}/GetLoadMoreFilmNomination`, {params: params});
  }
}
