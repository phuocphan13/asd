import { Component, OnInit, Input } from '@angular/core';
import { ShowSeatService } from 'src/app/core/services/show-seat.service';
import { SearchSeatModel } from 'src/app/core/model/search-seat.model';

@Component({
  selector: 'app-show-seat-view',
  templateUrl: './show-seat-view.component.html',
  styleUrls: ['./show-seat-view.component.scss']
})
export class ShowSeatViewComponent implements OnInit {
  @Input("data") item: any;
  text: number = 1;
  listSeats: any;
  rowSeats: [];
  showTimeId: SearchSeatModel =
    {
      ShowTime: 1
    };
  constructor(private showSeatService: ShowSeatService) { }

  ngOnInit() {
    this.showSeatService.getShowSeats(this.showTimeId).subscribe(result => {
      console.log(result);
      this.listSeats = result;
      this.splitSeats();
    })
  }

  private splitSeats() {
    // for (let i = 1; i < 10 ; i++) {
    //   let list = this.listSeats.filter(x => x.column == i);
    //   console.log(list);
    //   if (list.lenght > 0) {
    //      this.rowSeats.push(list);
    //   }
    //   else {
    //     break;
    //   }
    // }
    
  }

  onClick(){
    console.log(this.item);
  }

}
