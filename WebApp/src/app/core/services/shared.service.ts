import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SharedService {
  amount: number;
  data = new EventEmitter();

  get() {
    return this.amount;
  }

  set(value: number) {
    this.amount = value;
  }


  setData(value: any) {
    this.data.emit(value);
  }
}
