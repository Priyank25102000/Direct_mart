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
import { OrdersComponent } from './User/orders/orders.component';
import { LoginComponent } from './User/login/login.component';
import { SignupComponent } from './User/signup/signup.component';
import { ForgotPasswordComponent } from './User/forgot-password/forgot-password.component';
import { ProfileDetailsComponent } from './User/profile-details/profile-details.component';
import { AddressComponent } from './User/address/address.component';
import { EditAddressComponent } from './User/edit-address/edit-address.component';
import { ResetPasswordComponent } from './User/reset-password/reset-password.component';
import { ProductCategoriesComponent } from './User/product-categories/product-categories.component';
import { PurchaseComponent } from './User/purchase/purchase.component';
import { AuthGuard } from './User/login/Auth/auth1/auth.guard';
import { AdminauthGuard } from './admin/admin-login/login-auth/adminauth.guard';



const routes: Routes = [
  { path:"",canActivate :[AuthGuard],component:LoginComponent },
  { path:"home", component:HomeComponent },
  { path:"product-single" , canActivate :[AuthGuard],component:ProductsingleComponent },
  { path:"cart", component:CartComponent },
  { path:"checkout", component:CheckoutComponent },
  { path:"shop", component:ShopComponent },
  { path:"order", component:OrdersComponent },
  { path:"login", component:LoginComponent },
  { path:"signup", component:SignupComponent },
  { path:"forgot-password", component:ForgotPasswordComponent },
  { path:"profile-details", component:ProfileDetailsComponent },
  { path:"address", component:AddressComponent },
  { path:"edit-address", component:EditAddressComponent },
  {path:"reset-pass",component:ResetPasswordComponent},
  {path:"feedback",component:FeedbackComponent},
  {path:"admin-order",component:AdminOrderComponent},
  {path:"admin-login",component:AdminLoginComponent},
  {path:"product",component:ProductComponent},
  {path:"sells-return",component:SellsReturnComponent},
  {path:"product-categories",component:ProductCategoriesComponent},
  {path:"purchase",component:PurchaseComponent},
  {path:"admin-panel",canActivate :[AdminauthGuard],component:AdminPanelComponent},

  
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }