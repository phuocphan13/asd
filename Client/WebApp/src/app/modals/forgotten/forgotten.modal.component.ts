import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-forgotten-modal',
  templateUrl: './forgotten.modal.component.html',
  styleUrls: ['./forgotten.modal.component.scss']
})
export class ForgottenModalComponent implements OnInit {

  public event: EventEmitter<any> = new EventEmitter();

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {

  }

  onClickForgotten() {

  }

  onClickSubmit() {
    //API Submit
  }

  onClickCancel() {
    this.closeModal();
  }

  private closeModal() {
    this.bsModalRef.hide();
  }
}
