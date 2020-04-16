import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit {

  categoryId = 1;
  electronics: any;
  constructor(
    private userService : UserService
  ) { }

  ngOnInit() {
    this.userService.GetProducts(this.categoryId).subscribe(Response =>
       {
      this.electronics =Response;
      console.log(Response);
    })
  }

}

