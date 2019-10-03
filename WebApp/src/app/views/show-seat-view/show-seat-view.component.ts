import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-seat-view',
  templateUrl: './show-seat-view.component.html',
  styleUrls: ['./show-seat-view.component.scss']
})
export class ShowSeatViewComponent implements OnInit {

  listRow: any = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
    { id: 4, name: 'D' },
    { id: 5, name: 'E' },
    { id: 6, name: 'F' },
    { id: 7, name: 'G' },
    { id: 8, name: 'H' },
    { id: 9, name: 'I' },
  ];
  listCol:any = [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
    { id: 5, name: '5' },
    { id: 6, name: '6' },
    { id: 7, name: '7' },
    { id: 8, name: '8' },
  	{ id: 9, name: '9' },
  ];
  listStatus:any = [
    { id: 1, name: 'Ghế đang chọn' },
    { id: 2, name: 'Ghế đã bán' },
    { id: 3, name: 'Có thể chọn' },
    { id: 4, name: 'Không thể chọn' },    
  ];

  constructor() { }

  ngOnInit() {
  }

}
