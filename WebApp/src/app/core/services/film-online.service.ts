import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmPosterDetailModel } from '../model/film-model/film-poster-detail.model';

@Injectable()
export class FilmOnlineService {

  homeAddress = 'api/Film';
  apiHost = "http://localhost:59239";
  constructor(public httpClient: HttpClient) {
  }

  getListFilmsCarousel(): Observable<any> {
    return this.httpClient.get(`${this.apiHost}/${this.homeAddress}/GetListFilmsCarousel`);
  }

  getListFilmsNomination(): Observable<any> {
    return this.httpClient.get(`${this.apiHost}/${this.homeAddress}/GetListFilmsNomination`);
  }

  getLoadMoreFilmNomination(numberFilmNominationCurrent: any, numberFilmNominationTake: any): Observable<any> {
    let queryParams = new HttpParams().set('numberFilmNominationCurrent', numberFilmNominationCurrent)
                                      .set("numberFilmNominationTake", numberFilmNominationTake);
    return this.httpClient.get(`${this.apiHost}/${this.homeAddress}/GetLoadMoreFilmNomination`, { params: queryParams });
  }

  getFilmDetail(filmId: number) {
    return this.httpClient.get<FilmPosterDetailModel>(`${this.apiHost}/${this.homeAddress}/GetFilmDetail/${filmId}`);
  }

  getListFilmDetails(filmId : any, numberOfFilms: any): Observable<any> {
    let queryParams = new HttpParams().set('filmId', filmId)
                                      .set("numberOfFilms", numberOfFilms);
    return this.httpClient.get(`${this.apiHost}/${this.homeAddress}/GetListFilmDetails`, { params: queryParams });
  }
}
