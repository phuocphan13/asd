import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-booking-ticket',
  templateUrl: './booking-ticket.component.html',
  styleUrls: ['./booking-ticket.component.scss']
})
export class BookingTicketComponent implements OnInit {

  @Output() itemsValue = new EventEmitter<any>();
  totalTicketPrice: any = 0;
  totalComboPrice: any = 0;
  totalPrice: any = 0

  listCombo: any = [
    {
      id: 0,
      imgUrl: "https://media.ifind.vn/data/images/media/3d4-1535013677796.jpg",
      comboname: "Bắp Nước",
      price: 40000,
      value: 0
    },
    {
      id: 1,
      imgUrl: "https://media.ifind.vn/data/images/media/3d4-1535013677796.jpg",
      comboname: "Bắp Nước Vừa",
      price: 50000,
      value: 0
    },
    {
      id: 2,
      imgUrl: "https://media.ifind.vn/data/images/media/3d4-1535013677796.jpg",
      comboname: "Bắp Nước To",
      price: 60000,
      value: 0
    },
    {
      id: 3,
      imgUrl: "https://media.ifind.vn/data/images/media/3d4-1535013677796.jpg",
      comboname: "Bắp Nước KHỔNG LỒ",
      price: 100000,
      value: 0
    },
    {
      id: 4,
      imgUrl: "https://media.ifind.vn/data/images/media/3d4-1535013677796.jpg",
      comboname: "Bắp Bò",
      price: 75000,
      value: 0
    },
    {
      id: 5,
      imgUrl: "https://media.ifind.vn/data/images/media/3d4-1535013677796.jpg",
      comboname: "Bắp Chuối",
      price: 65000,
      value: 0
    },
  ]

  listTicket: any = [
    {
      id: 0,
      tickettype: "Vé 2D",
      price: 80000 ,
      value: 0
    },
    {
      id: 1,
      tickettype: "Vé 3D",
      price: 100000 ,
      value: 0
    },
    {
      id: 2,
      tickettype: "Vé IMAX",
      price: 180000 ,
      value: 0
    },
    {
      id: 3,
      tickettype: "Vé IMAX2",
      price: 185000 ,
      value: 0
    },
    {
      id: 4,
      tickettype: "Vé VERY IMAX",
      price: 190000 ,
      value: 0
    },
    {
      id: 5,
      tickettype: "Vé EVEN-BETTER IMAX",
      price: 280000 ,
      value: 0
    },
    {
      id: 6,
      tickettype: "Vé I'M-MAX",
      price: 380000 ,
      value: 0
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  ticketValueOutPut(item) {
    if(item.value==null)
    {
      item.value=0;
    }
    else if(item.value>10)
    {
      item.value=10;
    }
    
    this.listTicket.forEach(element => {
      this.totalTicketPrice = this.totalTicketPrice + ((element.value) * (element.price));
    });
    this.listCombo.forEach(element => {
      this.totalComboPrice = this.totalComboPrice + ((element.value) * (element.price));
    });
    this.totalPrice = this.totalComboPrice + this.totalTicketPrice;
    this.itemsValue.emit(this.totalPrice);
    this.totalTicketPrice = 0;
    this.totalComboPrice = 0;
  }

}
