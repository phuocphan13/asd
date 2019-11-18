export class SeatModel {
    id: number;
    guid: string;
    column: number;
    row: number;
    idProduct: number;
    idSeatType: number;
    isBooking: boolean;
    name: string;
    type: string;
    color: string;
    isChecked: boolean;
    idSeatType: number;

    constructor() {
        this.isChecked = false;
    }
}