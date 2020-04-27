import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit {
 
  User = new FormGroup({
    Quantity: new FormControl('', [ Validators.required,
    Validators.minLength(1),
    Validators.maxLength(5)]),
  });
 
  storage: any;
  categoryId = 1;
 
  electronics: any;
  res: any;
  taskModel: { OrderDetailsId: any; ProductId: any;Quantity: any;TotalPrice:any; };
  detail: any;
  priceLists: any;

 
  constructor(private userService : UserService,private routes: Router) { }

 

  ngOnInit() {
    
    this.storage = JSON.parse(sessionStorage.getItem('user'));
  
    this.userService.GetProducts(this.categoryId).subscribe(Response =>
       {
      this.electronics =Response;
      console.log(Response);
    });
    
  this.getId();
  }
  
getId(){
  var id = parseInt(this.storage.UserId);
  this.userService.getOrderDetails(id).subscribe(Res =>{
    this.detail = Res;
   

  });
}
getPrice(productId)
{
this.userService.getProductPrice(productId).subscribe(Response =>{
  this.priceLists = Response;
  
});

}
  onAddToCart(productId)
  {
    this.getPrice(productId);
   
    this.taskModel = {
      OrderDetailsId: this.detail,
      ProductId: productId,
      Quantity : parseInt(this.User.value.Quantity),
      TotalPrice :"1"
    };
 
    this.userService.addToCart(this.taskModel).subscribe(data => {
      this.res = data;
      alert("Item Added to Cart");
    });
    const navigationExtras: NavigationExtras = {
      queryParams: {
        detail: this.detail
      }
    };
    this.routes.navigate(['user/cart'], navigationExtras);
  }

}

