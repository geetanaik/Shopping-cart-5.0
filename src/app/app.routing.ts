import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./components/auth/auth.component";
import { ProductsComponent } from "./components/products/products.component";
import { SignupComponent } from "./components/signup/signup.component";
import { ProfilesCompoment } from "./components/profiles/profiles.component";



@NgModule({
    exports: [RouterModule],
    imports: [
         RouterModule.forRoot([
            {
                component: ProductsComponent,
                path: "products"
            },
            {
                component: SignupComponent,
                 path: "signup"   //url pattern
            },
           
             {
                component: ProfilesCompoment,
                path:'profiles'

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

