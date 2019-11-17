import { Injectable, EventEmitter } from '@angular/core';
import { SearchModel } from '../model/search.model';
import { SearchInformationModel } from '../model/payment/search-information.model';

@Injectable()
export class ShowMovieSharedService {
    searchModel = new SearchModel();

    get() {
        return this.searchModel;
    }

    set(value: any) {
        this.searchModel = value;
    }
}
