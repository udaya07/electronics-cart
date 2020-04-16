import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  storage: any;

  constructor() { }

  ngOnInit()
  {
    this.storage = JSON.parse(sessionStorage.getItem('user'));
  }

}
