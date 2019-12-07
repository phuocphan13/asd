import { Injectable, EventEmitter } from '@angular/core';
import { SeatBookingModel } from '../model/seat-booking.model';
import { ReverseSeatModel } from '../model/reverse-seat.model';
import { SeatModel } from '../model/payment/seat.model';
import { SeatTicketBookingModel } from '../model/payment/seat-ticket-booking.model';

@Injectable()

export class PaymentSharedService {
    caculationChange = new EventEmitter();

    listSeats: SeatModel[] = new Array(0);

    numberOfSeats: { id: number, quantity: number, name: string }[] = new Array(0);

    listSeatTicketBookings: SeatTicketBookingModel[] = new Array(0);

    set(value: any) {
        this.caculationChange.emit(value);
    }

    getListSeats() {
        return this.listSeats;
    }

    setListSeats(value: SeatModel[]) {
        this.listSeats = new Array(0);
        value.forEach(x => {
            this.listSeats.push(x);
        })
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }

    setNumberOfSeats(id, quantity, name) {
        this.numberOfSeats.push({ id: id, quantity: quantity, name: name });
    }

    getNumberTicket(){
        return this.listSeatTicketBookings;
    }

    setNumberTicket(value: SeatTicketBookingModel[]) {
        this.listSeatTicketBookings = value;
    }
}