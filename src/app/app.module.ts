import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
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
import { ReactiveFormsModule } from '@angular/forms';




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
    DashboardComponent,
    OrdersComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ProfileDetailsComponent,
    AddressComponent,
    EditAddressComponent,
    WatchesComponent,
    Shop2Component,
    Shop3Component,
    HandBagsComponent,
    ShoesComponent,
    ResetPasswordComponent,
    AdminLoginComponent,
    AdminOrderComponent,
    AdminPanelComponent,
    FeedbackComponent,
    ProductComponent,
    SellsReturnComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
