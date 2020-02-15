import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmPosterDetailModel } from '../model/film-model/film-poster-detail.model';
import { ApiService } from './api.service';

@Injectable()
export class FilmOnlineService {

  homeAddress = 'Film';
  apiHost = "http://localhost:59239";
  constructor(public httpClient: HttpClient,
    protected apiService: ApiService) {
  }

  getListFilmsCarousel(): Observable<any> {
    return this.apiService.get(`${this.homeAddress}/GetListFilmsCarousel`);
  }

  getListFilmsNomination(): Observable<any> {
    return this.apiService.get(`${this.homeAddress}/GetListFilmsNomination`);
  }

  getLoadMoreFilmNomination(numberFilmNominationCurrent: any, numberFilmNominationTake: any): Observable<any> {
    let queryParams = new HttpParams().set('numberFilmNominationCurrent', numberFilmNominationCurrent)
      .set("numberFilmNominationTake", numberFilmNominationTake);
    return this.apiService.get(`${this.homeAddress}/GetLoadMoreFilmNomination`, queryParams);
  }

  getFilmDetail(filmId: number) {
    return this.apiService.get(`${this.homeAddress}/GetFilmDetail/${filmId}`);
  }

  getListFilmDetails(filmId: any, numberOfFilms: any): Observable<any> {
    let queryParams = new HttpParams().set('filmId', filmId)
      .set("numberOfFilms", numberOfFilms);
    return this.apiService.get(`${this.homeAddress}/GetListFilmDetails`, queryParams);
  }
}
