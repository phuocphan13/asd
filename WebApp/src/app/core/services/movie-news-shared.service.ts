import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class MovieNewsSharedService {
  newsId: number;
  routingAction = new EventEmitter<boolean>();

  get() {
    return this.newsId;
  }

  set(value: number) {
    this.newsId = value;
  }

  changedAction(value: boolean) {
    this.routingAction.emit(value);
  }

}
