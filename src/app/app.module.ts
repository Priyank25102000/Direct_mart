import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { FeedbackComponent } from './admin/feedback/feedback.component';
import { ProductComponent } from './admin/product/product.component';
import { SellsReturnComponent } from './admin/sells-return/sells-return.component';
import { HeaderComponent } from './User/header/header.component';
import { FooterComponent } from './User/footer/footer.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCategoriesComponent } from './User/product-categories/product-categories.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { PurchaseComponent } from './User/purchase/purchase.component';
import { AuthGuard } from './User/login/Auth/auth1/auth.guard';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminauthGuard } from './admin/admin-login/login-auth/adminauth.guard';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsingleComponent,
    CartComponent,
    CheckoutComponent,
    ShopComponent,
    OrdersComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ProfileDetailsComponent,
    AddressComponent,
    EditAddressComponent,
    ResetPasswordComponent,
    AdminLoginComponent,
    AdminOrderComponent,
    AdminPanelComponent,
    FeedbackComponent,
    ProductComponent,
    SellsReturnComponent,
    ProductCategoriesComponent,
    FilterPipe,
    PurchaseComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule
  ],
  providers: [AuthGuard,AdminauthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
