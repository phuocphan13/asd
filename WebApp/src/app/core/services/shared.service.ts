import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SharedService{
    action = new EventEmitter();

    change(isChange: boolean)
    {
        this.action.emit(isChange);
        
    }
}
