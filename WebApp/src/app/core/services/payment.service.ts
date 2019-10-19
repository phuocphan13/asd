import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BillModel } from '../model/bill.model';

@Injectable()

export class PaymentService {

  homeAddress = 'api/Payment';
  apiHost = "http://localhost:59239";
  constructor(public httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get(`${this.apiHost}/${this.homeAddress}/GetAll`);
  }

  getListBill(data: BillModel[]): Observable<any> {
    return this.httpClient.post(`${this.apiHost}/${this.homeAddress}/GetListBill`, data);
  }
}
