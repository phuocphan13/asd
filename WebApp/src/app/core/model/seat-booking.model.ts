import { ReverseSeatModel } from "./reverse-seat.model";


export class SeatBookingModel {
    idShowTime: number;
    listReverseSeats: ReverseSeatModel[];
    checked: boolean;
    constructor() {
        this.listReverseSeats = new Array(0);
        this.idShowTime = 0;
        this.checked=false;
    }
}