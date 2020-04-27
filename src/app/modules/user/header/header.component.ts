import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  storage: any;

  constructor(private userService : UserService) { }
  OnLogout(){
    this.userService.logOut();
  }

  ngOnInit() {
    this.storage = JSON.parse(sessionStorage.getItem('user'));
  }

}
