import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchSeatModel } from '../model/search-seat.model';
import { SeatBookingModel } from '../model/seat-booking.model';

@Injectable()

export class ShowSeatService {

    homeAddress = 'api/Seat';
    apiHost = "http://localhost:59239";
    constructor(public httpClient: HttpClient) {
    }

    getShowSeats(data: SearchSeatModel): Observable<any> {
        return this.httpClient.post(`${this.apiHost}/${this.homeAddress}/GetListSeats`, data);
    }

    bookingSeat(seatBooking: SeatBookingModel): Observable<any> {
        return this.httpClient.post(`${this.apiHost}/api/Seat/SaveSeat`, seatBooking);
    }
}