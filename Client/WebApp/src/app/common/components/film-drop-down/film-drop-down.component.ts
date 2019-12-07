import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-film-drop-down',
  templateUrl: './film-drop-down.component.html',
  styleUrls: ['./film-drop-down.component.scss']
})
export class FilmDropDownComponent implements OnInit {

  @Input() isBorder: boolean;
  @Input("data") dropdownItemsArray: {id: number, text: string};
  @Output() changEvent = new EventEmitter();

  borderValue = "";
  title = "";

  constructor() { }

  ngOnInit() {
    this.getFirstTitle();
  }

  private getFirstTitle() {
    this.title = this.dropdownItemsArray[0].text;
  }

  private border() {
    if (this.isBorder)
      return { "border": "1px solid rgb(206, 203, 203)" }
    return { "border": "" }
  }

  onClickItem(item) {
    this.changEvent.emit(item);
  }
}
