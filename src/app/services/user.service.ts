import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  actionUrl: string = environment.baseUrl;

  constructor(private http : HttpClient,private router: Router ) {}


  logOut() {
    sessionStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }
  GetProducts(categoryid) {
    return this.http.get(this.actionUrl + '/api/Product/' + categoryid);
  }
  addToCart(taskmodel) {
    return this.http.post(this.actionUrl + '/api/Product/AddToCart', taskmodel);
  }
  viewCart(orderDetailsId)
  {
    return this.http.get(this.actionUrl + '/api/Product/ViewCart/' + orderDetailsId);
  }
  deleteFromCart(id)
  {
    return this.http.post(this.actionUrl + '/api/Product/deleteFromCart',id);
  }
  
    postDeliveryDetails(taskmodel)
  {
    return this.http.post(this.actionUrl + '/api/Orders/AddDeliveryDetails', taskmodel);
  }
  getAddress(userId)
  {
    return this.http.get(this.actionUrl + '/api/Orders/deliveryDetails/' + userId);
  }
  filterAddress(orderDetailsId)
  {
    return this.http.get(this.actionUrl + '/api/Orders/filterDetails/' + orderDetailsId);

  }
  updateDeliveryDetails(orderDetailsId,change)
  {
    return this.http.put(this.actionUrl + '/api/Orders/updateDeliveryDetails/'+ orderDetailsId,change);

  }
  getOrderDetails(userId)
  {
    return this.http.get(this.actionUrl +'/api/Orders/orderDetailsId/'+ userId);
  }
  getProductPrice(productId)
  {
    return this.http.get(this.actionUrl +'/api/Product/price/' + productId);

  }
  getCartId(OrderDetailsId,ProductId)
  {
    return this.http.get(this.actionUrl +'/api/Product/'+{OrderDetailsId}+{ProductId});

  }
  placeOrder(orderModel)
  {
    return this.http.post(this.actionUrl + '/api/Product/placeOrder', orderModel);

  }
  viewOrders(UserId)
  {
    return this.http.get(this.actionUrl +'/api/Product/ViewOrders/'+UserId);

  }

}

