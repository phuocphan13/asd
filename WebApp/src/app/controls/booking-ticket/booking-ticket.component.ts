import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-booking-ticket',
  templateUrl: './booking-ticket.component.html',
  styleUrls: ['./booking-ticket.component.scss']
})
export class BookingTicketComponent implements OnInit {

  @Output() itemsValue = new EventEmitter<any>();


  listCombo: any = [
    {
      id: 0,
      imgUrl: "https://media.ifind.vn/data/images/media/3d4-1535013677796.jpg",
      comboname: "Bắp Nước",
      price: "40.000"
    },
  ]

  listTicket: any = [
    {
      id: 0,
      tickettype: "Vé 2D",
      price: "80.000 "
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  ItemsValueOutPut(item) {
    console.log(item);
    var ticketInputValue = (<HTMLInputElement>document.getElementById("ticketValue")).value;
    var comboInputValue = (<HTMLInputElement>document.getElementById("comboValue")).value;
    // console.log(price);
    var totalValue = parseInt(ticketInputValue) * 80000 + parseInt(comboInputValue) * 40000;
    this.itemsValue.emit(totalValue);
  }
}
