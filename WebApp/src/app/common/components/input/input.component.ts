import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() icon: string;
  @Input() placeholder: string;
  @Input() inputText: string;
  @Input() errorMessage: string[];
  

  private innerValue: any = '';

  iconClass: string;
  constructor() { }

  ngOnInit() {
    this.iconClass = `fas ${this.icon} fa-2x input-icon`;
  }

  get value(): any {
    return this.innerValue;
  };

  @Input() set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
    }
  }

}
