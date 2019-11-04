import { Injectable, EventEmitter } from '@angular/core';
import { SeatBookingModel } from '../model/seat-booking.model';
import { ReverseSeatModel } from '../model/reverse-seat.model';

@Injectable()

export class PaymentSharedService {
    caculationChange = new EventEmitter();

    listSeats: ReverseSeatModel[] = new Array(0);

    numberOfSeats: { id: number, quantity: number, name: string }[] = new Array(0);

    set(value: any) {
        this.caculationChange.emit(value);
    }

    getListSeats() {
        return this.listSeats;
    }

    setListSeats(value: ReverseSeatModel) {
        this.listSeats.push(value);
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }

    setNumberOfSeats(id, quantity, name) {
        this.numberOfSeats.push({ id: id, quantity: quantity, name: name });
    }
}