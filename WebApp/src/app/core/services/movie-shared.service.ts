import { Injectable, EventEmitter } from '@angular/core';
import { SearchInformationModel } from '../model/payment/search-information.model';

@Injectable({
  providedIn: 'root'
})

export class MovieSharedService{    
    item: SearchInformationModel = new SearchInformationModel();

}
