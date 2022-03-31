import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { AddressComponent } from './address/address.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { WatchesComponent } from './watches/watches.component';
import { Shop2Component } from './shop2/shop2.component';
import { Shop3Component } from './shop3/shop3.component';
import { HandBagsComponent } from './hand-bags/hand-bags.component';
import { ShoesComponent } from './shoes/shoes.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { FeedbackComponent } from './admin/feedback/feedback.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ProductComponent } from './admin/product/product.component';
import { SellsReturnComponent } from './admin/sells-return/sells-return.component';
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