import { BillDetailModel } from "./bill-detail.model";

export class PaymentBillModel {
    userId: number;
    total: number;
    listBillDetails: BillDetailModel[];

    constructor() {
        this.listBillDetails = new Array(0);
        this.userId = 0;
        this.total = 0;
    }
}