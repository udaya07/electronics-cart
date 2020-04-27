import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-your-orders',
  templateUrl: './your-orders.component.html',
  styleUrls: ['./your-orders.component.scss']
})
export class YourOrdersComponent implements OnInit {
  storage: any;
  yourOrders: any;

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.storage = JSON.parse(sessionStorage.getItem('user'));
   var UserId = parseInt(this.storage.UserId);
    this.userService.viewOrders(UserId).subscribe(Response =>
      {
        this.yourOrders =Response;
        console.log(this.yourOrders);
      })
  }

}
