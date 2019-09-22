import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-booking-ticket',
  templateUrl: './booking-ticket.component.html',
  styleUrls: ['./booking-ticket.component.scss']
})
export class BookingTicketComponent implements OnInit {

  @Output() itemsValue = new EventEmitter<any>();
  totalTicketPrice: any=0;
  totalComboPrice:any=0;
  totalPrice:any=0

  listCombo: any = [
    {
      id: 0,
      imgUrl: "https://media.ifind.vn/data/images/media/3d4-1535013677796.jpg",
      comboname: "Bắp Nước",
      price: "40.000",
      value: 0
    },
    {
      id: 1,
      imgUrl: "https://media.ifind.vn/data/images/media/3d4-1535013677796.jpg",
      comboname: "Bắp Nước Vừa",
      price: "50.000",
      value: 0
    },
    {
      id: 2,
      imgUrl: "https://media.ifind.vn/data/images/media/3d4-1535013677796.jpg",
      comboname: "Bắp Nước To",
      price: "60.000",
      value: 0
    },
  ]

  listTicket: any = [
    {
      id: 0,
      tickettype: "Vé 2D",
      price: "80.000 ",
      value: 0
    },
    {
      id: 1,
      tickettype: "Vé 3D",
      price: "100.000 ",
      value: 0
    },
    {
      id: 2,
      tickettype: "Vé IMAX",
      price: "180.000 ",
      value: 0
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  ticketValueOutPut() {
    this.listTicket.forEach(element => {
    this.totalTicketPrice= this.totalTicketPrice+ ((element.value) * parseInt(element.price));
    });
    this.listCombo.forEach(element => {
      this.totalComboPrice= this.totalComboPrice+ ((element.value) * parseInt(element.price));
      });
    this.totalPrice=this.totalComboPrice+this.totalTicketPrice;
    this.itemsValue.emit(this.totalPrice);
    this.totalTicketPrice=0;
    this.totalComboPrice=0;
  }

}
