import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BillModel } from '../model/bill.model';
import { PaymentBillModel } from '../model/payment/payment-bill.model';

@Injectable()

export class PaymentService {

  homeAddress = 'api/Payment';
  apiHost = "http://localhost:59239";
  constructor(public httpClient: HttpClient) {
  }

  getListProducts(idCinema: number): Observable<any> {
    let queryParams = new HttpParams().set('idCinema', idCinema.toString());
    return this.httpClient.get(`${this.apiHost}/${this.homeAddress}/GetListProducts`, { params: queryParams });
  }

  getListBill(data: PaymentBillModel): Observable<any> {
    return this.httpClient.post(`${this.apiHost}/${this.homeAddress}/Create`, data);
  }
}
