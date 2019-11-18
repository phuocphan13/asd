import { BillDetailModel } from "./bill-detail.model";
import { ReverseSeatModel } from "../reverse-seat.model";

export class PaymentBillModel {
    userId: number;
    total: number;
    idShowTime: number;
    // idRoom: number;
    listBillDetails: BillDetailModel[];
    listSeats: ReverseSeatModel[];

    constructor() {
        this.listBillDetails = new Array(0);
        this.listSeats = new Array(0);
        this.userId = 0;
        this.total = 0;
    }
}