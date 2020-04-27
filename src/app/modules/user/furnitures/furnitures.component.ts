import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-furnitures',
  templateUrl: './furnitures.component.html',
  styleUrls: ['./furnitures.component.scss']
})
export class FurnituresComponent implements OnInit {
  User = new FormGroup({
    Quantity: new FormControl('', [ Validators.required,
    Validators.minLength(1),
    Validators.maxLength(5)]),
  });

  categoryId = 2;
  furnitures: any;
  taskModel: { OrderDetailsId:any; ProductId: any;   Quantity :any,
    TotalPrice :any};
  storage: any;
  res;
  detail: Object;
  priceLists: Object;
  constructor(
    private userService: UserService,private routes: Router
  ) { }

  ngOnInit() {
    this.storage = JSON.parse(sessionStorage.getItem('user'));
    this.userService.GetProducts(this.categoryId).subscribe(Response => {
      this.furnitures = Response;
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
  onAddToCart(productId) {
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