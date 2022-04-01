import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { FeedbackComponent } from './admin/feedback/feedback.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ProductComponent } from './admin/product/product.component';
import { SellsReturnComponent } from './admin/sells-return/sells-return.component';
import { HomeComponent } from './User/home/home.component';
import { ProductsingleComponent } from './User/productsingle/productsingle.component';
import { CartComponent } from './User/cart/cart.component';
import { CheckoutComponent } from './User/checkout/checkout.component';
import { ShopComponent } from './User/shop/shop.component';
import { DashboardComponent } from './User/dashboard/dashboard.component';
import { OrdersComponent } from './User/orders/orders.component';
import { LoginComponent } from './User/login/login.component';
import { SignupComponent } from './User/signup/signup.component';
import { ForgotPasswordComponent } from './User/forgot-password/forgot-password.component';
import { ProfileDetailsComponent } from './User/profile-details/profile-details.component';
import { AddressComponent } from './User/address/address.component';
import { EditAddressComponent } from './User/edit-address/edit-address.component';
import { WatchesComponent } from './User/watches/watches.component';
import { Shop2Component } from './User/shop2/shop2.component';
import { Shop3Component } from './User/shop3/shop3.component';
import { HandBagsComponent } from './User/hand-bags/hand-bags.component';
import { ShoesComponent } from './User/shoes/shoes.component';
import { ResetPasswordComponent } from './User/reset-password/reset-password.component';
const routes: Routes = [
  { path:"", component:HomeComponent },
  { path:"product-single", component:ProductsingleComponent },
  { path:"cart", component:CartComponent },
  { path:"checkout", component:CheckoutComponent },
  { path:"shop", component:ShopComponent },
  { path:"dashboard", component:DashboardComponent },
  { path:"order", component:OrdersComponent },
  { path:"login", component:LoginComponent },
  { path:"signup", component:SignupComponent },
  { path:"forgot-password", component:ForgotPasswordComponent },
  { path:"profile-details", component:ProfileDetailsComponent },
  { path:"address", component:AddressComponent },
  { path:"edit-address", component:EditAddressComponent },
  { path:"watches", component:WatchesComponent },
  { path:"shop2", component:Shop2Component },
  { path:"shop3", component:Shop3Component },
  { path:"hand-bag", component:HandBagsComponent},
  { path:"shoes", component:ShoesComponent},  
  {path:"reset-pass",component:ResetPasswordComponent},
  {path:"admin-panel",component:AdminPanelComponent},
  {path:"feedback",component:FeedbackComponent},
  {path:"admin-order",component:AdminOrderComponent},
  {path:"admin-login",component:AdminLoginComponent},
  {path:"product",component:ProductComponent},
  {path:"sells-return",component:SellsReturnComponent},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }