import { Component, OnInit } from '@angular/core';
import { DropDownItemModel } from 'src/app/core/model/drop-down-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchText: string;
  titleMenu1 = "Phim Chiếu Rạp";
  titleMenu2 = "Phim";

  listHeaderChildrens: DropDownItemModel[] = [
    { id: 1, name: 'Rạp' },
    { id: 2, name: 'Lịch chiếu' },
    { id: 3, name: 'Suất chiếu' },
  ];
  listMenus: DropDownItemModel[] = [
    { id: 1, name: 'Phim bộ' },
    { id: 2, name: 'Phim lẻ' },
  ];
  constructor() { }

  ngOnInit() {
  }

  onSearch() {
    console.log(this.searchText);
  }
}
