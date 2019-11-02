import { Injectable, EventEmitter } from '@angular/core';
import { SeatBookingModel } from '../model/seat-booking.model';

@Injectable()

export class SeatSharedService {
    seatBooking = new SeatBookingModel();
    
    get(){
        return this.seatBooking;
    }
    
    set(value: any){
        this.seatBooking = value;
    }
}