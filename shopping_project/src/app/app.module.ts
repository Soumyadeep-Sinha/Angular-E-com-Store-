import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { CategoryComponent } from './category/category.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ProductsComponent } from './products/products.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { SellerProductsComponent } from './seller-products/seller-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    SellerLoginComponent,
    CategoryComponent,
    MobilesComponent,
    ProductpageComponent,
    UserSignupComponent,
    UserLoginComponent,
    ProductsComponent,
    CartPageComponent,
    UserDashboardComponent,
    LaptopsComponent,
    SellerProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
