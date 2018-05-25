import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./components/auth/auth.component";
import { ProductsComponent } from "./components/products/products.component";
import { SignupComponent } from "./components/signup/signup.component";
import { ProfilesCompoment } from "./components/profiles/profiles.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { AuthGuard } from "./components/auth/auth-guard";
import { StorefrontComponent } from "./components/storefront/storefront.component";
import { PaymentComponent } from "./components/payment/payment.component";




@NgModule({
    exports: [RouterModule],
    imports: [
         RouterModule.forRoot([
            {
                component: ProductsComponent,
                path: "products",canActivate:[AuthGuard]
            },
            {
                component: SignupComponent,
                 path: "signup"   //url pattern
            },
            
             {
                component: ProfilesCompoment,
                path:"profiles" 

             },

             {
                component: StorefrontComponent,
                path:"storefront" 
             },

             {
                    component: CheckoutComponent,
                    path: "checkout"   ///,canActivate:[AuthGuard]
             },

             {
                          component: PaymentComponent,
                        path: "payment"
             },

            {
                component: AuthComponent,
                path: "**"
            },
         ])
    ]
})
export class AppRoutingModule{


}

