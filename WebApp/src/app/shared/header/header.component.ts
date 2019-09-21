import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchText: string;
  listHeaderChildrens = [
    {id: 1, name:'Rạp'},
    {id: 2, name:'Lịch chiếu'},   
    {id: 3, name:'Suất chiếu'}, 
  ];
  listMenus = [
    {id: 1, name: 'Phim bộ'},
    {id: 2, name: 'Phim lẻ'},
  ];
  constructor() { }

  ngOnInit() {
  }

  onSearch() { 
    console.log(this.searchText); 
  }
}
