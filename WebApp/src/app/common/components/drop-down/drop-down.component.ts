import { Component, OnInit, Input } from '@angular/core';
import { DropDownItemModel } from 'src/app/core/model/drop-down-item.model';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  @Input('items') listItems: DropDownItemModel[];
  @Input('title') title: string;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    
  }

}
