import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/user/dashboard/dashboard.component';
import { NavbarComponent } from './modules/user/navbar/navbar.component';
import { YourOrdersComponent } from './modules/user/your-orders/your-orders.component';
import { WishlistComponent } from './modules/user/wishlist/wishlist.component';
import { HeaderComponent } from './modules/user/header/header.component';
import { CartComponent } from './modules/user/cart/cart.component';
import { AboutComponent } from './modules/user/about/about.component';
import { ElectronicsComponent } from './modules/user/electronics/electronics.component';
import { FurnituresComponent } from './modules/user/furnitures/furnitures.component';
import { LoginComponent } from './modules/login/login/login.component';
import { RegisterComponent } from './modules/login/register/register.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'user/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'user/dashboard',
    component: DashboardComponent,
  },


  {
    path: 'user/your-orders',
    component: YourOrdersComponent
  },
  {
    path: 'user/navbar',
    component: NavbarComponent
  },
  {
    path: 'user/wishlist',
    component: WishlistComponent
  },
  {
    path: 'user/cart',
    component: CartComponent
  },
  {
    path: 'user/about',
    component: AboutComponent
  },
  {
    path: 'user/electronics',
    component: ElectronicsComponent

  },
  {
    path: 'user/furnitures',
    component: FurnituresComponent

  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// tslint:disable-next-line: max-line-length
export const routingComponents = [YourOrdersComponent, DashboardComponent, NavbarComponent, WishlistComponent, HeaderComponent, CartComponent, AboutComponent, ElectronicsComponent, FurnituresComponent, LoginComponent, RegisterComponent];
