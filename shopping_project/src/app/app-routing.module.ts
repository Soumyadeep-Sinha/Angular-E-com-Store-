import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'userSignup', component: UserSignupComponent },
  { path: 'userLogin', component: UserLoginComponent },
  { path: 'sellerAuth', component: SellerAuthComponent },
  { path: 'sellerHome', component: SellerHomeComponent },
  { path: 'sellerLogin', component: SellerLoginComponent },
  { path: 'sellerProducts', component: SellerProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'mobiles', component: MobilesComponent },
  { path: 'laptops', component: LaptopsComponent },
  { path: 'product/:id', component: ProductpageComponent },
  { path: 'cartPage', component: CartPageComponent },
  { path: 'userDashboard', component: UserDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
