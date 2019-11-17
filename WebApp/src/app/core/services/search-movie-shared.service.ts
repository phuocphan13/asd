import { Injectable, EventEmitter } from '@angular/core';
import { SearchModel } from '../model/search.model';
import { SearchInformationModel } from '../model/payment/search-information.model';

@Injectable()
export class SearchMovieSharedService {
    searchInformationModel = new SearchInformationModel();

    get() {
        return this.searchInformationModel;
    }

    set(value: any) {
        this.searchInformationModel = value;
    }
}
