export class SeatModel {
    id: number;
    guid: string;
    column: number;
    row: number;
    idSeatType: number;
    isBooking: boolean;
    name: string;
    type: string;
    color: string;
    isChecked: boolean;

    constructor() {
        this.isChecked = false;
    }
}