import { Component, OnInit, Input } from '@angular/core';
import { ItemShowingEnum } from 'src/app/core/enum/item-showing.enum';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-item-showing',
  templateUrl: './item-showing.component.html',
  styleUrls: ['./item-showing.component.scss']
})
export class ItemShowingComponent implements OnInit {

  @Input("data") item: any;
  @Input() type: ItemShowingEnum;

  constructor(private _domSanitizer: DomSanitizer ) { 
    
  }

  ngOnInit() {
    console.log(this.item);
  }

}
