import { Component, OnInit, Input } from '@angular/core';
import { DropDownItemModel } from 'src/app/core/model/drop-down-item.model';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  @Input('items') listItems: DropDownItemModel[];
  @Input('title') title: string;

  constructor() { }

  ngOnInit() {
  }

}
