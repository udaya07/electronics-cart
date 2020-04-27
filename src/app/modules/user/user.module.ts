import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { YourOrdersComponent } from './your-orders/your-orders.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FurnituresComponent } from './furnitures/furnitures.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { ViewDeliveryDetailsComponent } from './view-delivery-details/view-delivery-details.component';



@NgModule({
  declarations: [DashboardComponent, YourOrdersComponent, NavbarComponent, WishlistComponent, HeaderComponent, CartComponent, AboutComponent, ElectronicsComponent, FurnituresComponent, DeliveryDetailsComponent, ViewDeliveryDetailsComponent],
  imports: [
    CommonModule,
    
  ]
})
export class UserModule { }
