import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-film-online-recently-detail',
  templateUrl: './film-online-recently-detail.component.html',
  styleUrls: ['./film-online-recently-detail.component.scss']
})
export class FilmOnlineRecentlyDetailComponent implements OnInit, OnChanges {

  @Input() data: any;
  @Input() isExpand: boolean;
  @Output() closeViewDetail = new EventEmitter();

  leftPosition: string;
  widthValue: string;
  detailText: string;
  iconText: string;

  starArray: any;;
  constructor(private _domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.showingStar();
    this.changeViewDetail();
  }

  ngOnChanges() {
    this.changeViewDetail();

  }

  private changeViewDetail() {
    this.leftPosition = !this.isExpand ? "0px" : "280px";
    this.widthValue = !this.isExpand ? "280px" : "560px";
    this.detailText = this.isExpand ? "Close" : "View";
    this.iconText = this.isExpand ? "fa-angle-left" : "fa-angle-right";
  }

  onClickOverlay() {
    if (!this.isExpand) {
      this.closeViewDetail.emit(this.data.id);
    }
    this.isExpand = !this.isExpand;
    this.changeViewDetail();
  }

  private showingStar() {
    this.starArray = ["fas fa-star", "fas fa-star", "fas fa-star-half-alt", "far fa-star", "far fa-star"];
  }
}
