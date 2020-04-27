
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { async } from '@angular/core/testing';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  ordersId:any;
  storage: any;
  carts: Object;
Id;
  delete;
  taskModel: { OrderDetailsId: number; ProductId: any; };
  details: any;
  newModel: { OrderDetailsId: any; ProductId: any; };
  cartId: any;
  date: Date;
  orderModel: { OrderDetailsId: any;ProductId:any; OrderDate: Date; };
  CustomerId;
  myOrders;
  


  constructor(private userService: UserService, private routes: Router,
    private route: ActivatedRoute,) {
      this.date = new Date();
     }

  ngOnInit():void {
    this.storage = JSON.parse(sessionStorage.getItem('user'));
    
    this.route.queryParams.subscribe(params => {
        this.details = params['detail'];
        console.log(this.details);
    });
    if(this.details)
{
   this.showcart();
 
} 
else
{
this.normalViewCart();
} 
}
  
  onDelete(productId) {

    if(this.details){ 
      
    this.taskModel = {
      OrderDetailsId: parseInt(this.details),
      ProductId: productId,

    };
  
     this.userService.deleteFromCart(this.taskModel).subscribe(
      Response => {
        this.delete = Response;
        this.showcart();
        
      }
     );
  }
  else
  {  
    this.newModel = {
      OrderDetailsId: this.Id,
      ProductId: productId,

    };
  
     this.userService.deleteFromCart(this.newModel).subscribe(
      Response => {
        this.delete = Response;
        this.normalViewCart();
  });
 
}
  }
    showcart()
    {
     
      this.userService.viewCart(this.details).subscribe(Response => {
        this.carts = Response;
      
        console.log(Response);
         
 
       
      });



    }
normalViewCart()
{
  var userId = parseInt(this.storage.UserId);

  this.userService.getOrderDetails(userId).toPromise().then(
    data =>{
      this.Id = data;
   
 
 this.userService.viewCart(this.Id).toPromise().then(data => {
   this.carts = data;
 
   console.log(this.carts);
  
 });
 });
}


onBuyNow(productId)
{
  if(this.details)
  {
    var CustomerId =parseInt(this.details);
   
  
        this.orderModel = {

          OrderDetailsId: CustomerId,
          ProductId : productId,
          OrderDate : this.date,

}

this.userService.placeOrder(this.orderModel).subscribe(
  data =>{
    this.myOrders = data;
  });

  alert("order placed"); 

}
else{
  this.orderModel = {

    OrderDetailsId: this.Id,
    ProductId : productId,
    OrderDate : this.date,

};

this.userService.placeOrder(this.orderModel).subscribe(
data =>{
this.myOrders = data;
});

alert("order placed"); 

}
  

}

}




