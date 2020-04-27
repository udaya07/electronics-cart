import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.scss']
})
export class DeliveryDetailsComponent implements OnInit {
  user = new FormGroup({
    Name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(25)
    ]),
    ContactNo: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(15)
    ]),
    DeliveryAddress: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(50)
    ]),
    Pincode: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10)
    ])
  });
  storage: any;
  taskModel: { UserId: number; DeliverTo: any; ContactNo: any; DeliveryAddress: any; Pincode: any; };
  details: any;

  address: any;
  res: any;
  change: { UserId: number; DeliverTo: any; ContactNo: any; DeliveryAddress: any; Pincode: any; };
  id: number;




  constructor(private userService: UserService, private route: ActivatedRoute,private routes: Router,) { }
  ngOnInit() {
    this.storage = JSON.parse(sessionStorage.getItem('user'));

    this.route.params.subscribe(params => {
      this.id = +params.id;
      if (this.id) 
      {

    this.userService.filterAddress(this.id).subscribe(Response => {
      this.address = Response;
      // console.log(this.address.id);
         this.user.patchValue({
          Name: this.address.deliverTo,
          ContactNo: this.address.contactNo,
          DeliveryAddress: this.address.deliveryAddress,
          Pincode: this.address.pincode

        });
      
    });
  }
});
  }


  onPost() {

    if (this.id) {
      this.change = {
        UserId: parseInt(this.storage.UserId),
        DeliverTo: this.user.value.Name,
        ContactNo: this.user.value.ContactNo,
        DeliveryAddress: this.user.value.DeliveryAddress,
        Pincode: this.user.value.Pincode

      };
      var orderDetailsId = this.address.id;
      this.userService.updateDeliveryDetails(orderDetailsId, this.change).subscribe(Response => {
        this.res = Response;
      
      });

    }
    else {
      this.taskModel = {

        UserId: parseInt(this.storage.UserId),
        DeliverTo: this.user.value.Name,
        ContactNo: this.user.value.ContactNo,
        DeliveryAddress: this.user.value.DeliveryAddress,
        Pincode: this.user.value.Pincode
      };
      this.userService.postDeliveryDetails(this.taskModel).subscribe(
        Response => {
          this.details = Response;

        });
    }

    this.user.reset();
    // this.routes.navigate(['/user/viewDeliveryDetails']);
   
  }


}
