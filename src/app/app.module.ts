import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { ProductService } from './service/product-service';
import { AuthComponent } from './components/auth/auth.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CustomersComponent } from './components/customers/customers.component';
import { StorefrontComponent } from './components/storefront/storefront.component';
import { AuthService } from './service/auth.service';
import { AppRoutingModule } from './app.routing';
import { AccountComponent } from './components/account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    CartComponent,
    CheckoutComponent,
    CustomersComponent,
    StorefrontComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProductService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
 //We are defining our own

 }
