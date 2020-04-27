import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-delivery-details',
  templateUrl: './view-delivery-details.component.html',
  styleUrls: ['./view-delivery-details.component.scss']
})
export class ViewDeliveryDetailsComponent implements OnInit {
  storage: any;
  datas;
id;
  isDetail: string;
  constructor(private userService : UserService, private route: ActivatedRoute,private routes: Router) { }

  ngOnInit() {
    this.storage = JSON.parse(sessionStorage.getItem('user'));
    

    this.userService.getAddress(parseInt(this.storage.UserId)).subscribe(Response => {
      this.datas = Response;
      if (this.datas) {
        this.isDetail = 'yes';
      } else {
        this.isDetail = 'no';
      }
  });
  }
}
