import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../core/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    
  }

}
