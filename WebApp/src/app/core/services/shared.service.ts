import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SharedService{    
    item: any;

    get(){
      return this.item;
    }
    set(value: any){
      this.item = value;
    }
}
