import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemShowingEnum } from 'src/app/core/enum/item-showing.enum';
import { DomSanitizer } from '@angular/platform-browser';
import { SearchInformationModel } from 'src/app/core/model/payment/search-information.model';
import { MovieSharedService } from 'src/app/core/services/movie-shared.service';

@Component({
  selector: 'app-item-showing',
  templateUrl: './item-showing.component.html',
  styleUrls: ['./item-showing.component.scss']
})
export class ItemShowingComponent implements OnInit {

  @Input("data") item: any;
  @Input() type: ItemShowingEnum;
  @Output() bookingMovieItem = new EventEmitter();
  constructor(private _domSanitizer: DomSanitizer,
    private movieSharedService: MovieSharedService) {
  }

  ngOnInit() {

    // console.log(this.item);
  }
  onClickShowTime(item,showTime) {
    this.movieSharedService.item.picture = item.picture;
    this.movieSharedService.item.address  = item.address;
    this.movieSharedService.item.name  = item.name;
    this.movieSharedService.item.showtime = showTime;
    this.bookingMovieItem.emit(true);
    // console.log(item.address);
  }
}
