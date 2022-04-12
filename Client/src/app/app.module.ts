import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { ProductComponent } from './admin/product/product.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { FeedbackComponent } from './admin/feedback/feedback.component';
import { SellsReturnComponent } from './admin/sells-return/sells-return.component';
import { FilterPipe } from './shared/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './user/footer/footer.component';
import { HomeComponent } from './user/home/home.component';
import { ProductsingleComponent } from './user/productsingle/productsingle.component';
import { CartComponent } from './user/cart/cart.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { ShopComponent } from './user/shop/shop.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './user/orders/orders.component';
import { LoginComponent } from './user/login/login.component';
import { EditAddressComponent } from './user/edit-address/edit-address.component';
import { AddressComponent } from './user/address/address.component';
import { SignupComponent } from './user/signup/signup.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { ProfileDetailsComponent } from './user/profile-details/profile-details.component';
import { HeaderComponent } from './user/header/header.component';
import { AuthGuard } from './user/login/auth1/auth.guard';
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
    DashboardComponent,
    OrdersComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ProfileDetailsComponent,
    AddressComponent,
    EditAddressComponent,

     AdminLoginComponent,
     AdminPanelComponent,
     ProductComponent,
     AdminOrderComponent,
     FeedbackComponent,
     SellsReturnComponent,
     FilterPipe,
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
   
   

  ],
  providers: [AuthGuard,AdminauthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
