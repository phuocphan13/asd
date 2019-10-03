import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login.modal.component.html',
  styleUrls: ['./login.modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  public event: EventEmitter<any> = new EventEmitter();

  user : any = { username: "", password: "" };
  username: string;
  password: string;

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {

  }

  onClickForgotten() {
    this.event.emit(1);
    this.bsModalRef.hide();
  }

  onClickLogIn() {
    //API Login
    console.log(this.password)
  }

  onClickCancel() {
    this.closeModal();
  }

  private closeModal() {
    this.bsModalRef.hide();
  }

}
