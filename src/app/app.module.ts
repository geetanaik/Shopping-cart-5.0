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
import { DataService } from './service/data.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AddProductPopup} from './components/popup/addproduct.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfilesCompoment } from './components/profiles/profiles.component';
import { SignUpService } from './service/signup.service';
import { EditProduct } from './components/popup/editproduct.component';
import { CHidden } from '../directive/chidden.directive';
import { StorageServiceModule} from 'angular-webstorage-service';
import { AuthGuard } from './components/auth/auth-guard';
import { OrderSummaryComponent } from './components/checkout/order.component-summary';
import { PaymentComponent } from './components/payment/payment.component';


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
    AddProductPopup,
    SignupComponent,
    ProfilesCompoment,
    EditProduct,
    CHidden,
    OrderSummaryComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    StorageServiceModule
  ],
  providers: [ProductService,AuthService,DataService,SignUpService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
 //We are defining our own

 }
