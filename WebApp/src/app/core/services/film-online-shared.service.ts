import { Injectable, EventEmitter } from '@angular/core';
import { FilmPosterDetailModel } from '../model/film-model/film-poster-detail.model';

@Injectable()
export class FilmOnlineShareService {
    filmOnlinePosterDetail: FilmPosterDetailModel;

    get() {
        return this.filmOnlinePosterDetail;
    }

    set(data: FilmPosterDetailModel) {
        this.filmOnlinePosterDetail = data;
    }
}
