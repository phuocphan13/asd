import { Component, OnInit, Input } from '@angular/core';
import { ItemShowingEnum } from 'src/app/core/enum/item-showing.enum';

@Component({
  selector: 'app-item-showing',
  templateUrl: './item-showing.component.html',
  styleUrls: ['./item-showing.component.scss']
})
export class ItemShowingComponent implements OnInit {

  @Input("data") movie: any
  @Input() type: ItemShowingEnum;

  constructor() { }

  ngOnInit() {
  }

}
