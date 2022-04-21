import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { ProductComponent } from './admin/product/product.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { FeedbackComponent } from './admin/feedback/feedback.component';
import { SellsReturnComponent } from './admin/sells-return/sells-return.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { HomeComponent } from './user/home/home.component';
import { ProductsingleComponent } from './user/productsingle/productsingle.component';
import { CartComponent } from './user/cart/cart.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { AddressComponent } from './user/address/address.component';
import { ProfileDetailsComponent } from './user/profile-details/profile-details.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { OrdersComponent } from './user/orders/orders.component';

import { ShopComponent } from './user/shop/shop.component';
import { AuthGuard } from './user/login/auth1/auth.guard';
import { AdminauthGuard } from './admin/admin-login/login-auth/adminauth.guard';
import { PurchaseComponent } from './user/purchase/purchase.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { ConfirmComponent } from './user/confirm/confirm.component';


const routes: Routes = [
  { path:"", canActivate :[AuthGuard],component:LoginComponent },
  { path:"product-single", component:ProductsingleComponent },
  { path:"cart", component:CartComponent },
  { path:"checkout", component:CheckoutComponent },
  { path:"shop", component:ShopComponent },
  { path:"order", component:OrdersComponent },
  { path:"login", component:LoginComponent },
  { path:"signup", component:SignupComponent },
  { path:"forgot-password", component:ForgotPasswordComponent },
  { path:"profile-details", component:ProfileDetailsComponent },
  { path:"address", component:AddressComponent },
  { path:"admin-login" ,component:AdminLoginComponent},
  { path:"admin-panel" ,canActivate :[AdminauthGuard],component:AdminPanelComponent},
  { path:"product" ,component:ProductComponent},
  {path:"admin-order" ,component:AdminOrderComponent},
  {path:"feedback" ,component:FeedbackComponent},
  {path:"sells-return" ,component:SellsReturnComponent},
  {path:"home" ,component:HomeComponent},
  {path:"purchase", component:PurchaseComponent},
  {path:"reset-pass",component:ResetPasswordComponent},
  {path:"confirm", component:ConfirmComponent}


  
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }