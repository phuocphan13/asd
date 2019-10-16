import { Component, OnInit } from '@angular/core';
import {ShowSeatService} from 'src/app/core/services/show-seat.service';

@Component({
  selector: 'app-show-seat-view',
  templateUrl: './show-seat-view.component.html',
  styleUrls: ['./show-seat-view.component.scss']
})
export class ShowSeatViewComponent implements OnInit {

  listSeats:[];

  constructor(private showSeatService : ShowSeatService) { }

  ngOnInit() {
    
  }


}
