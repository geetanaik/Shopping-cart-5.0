import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./components/auth/auth.component";
import { ProductsComponent } from "./components/products/products.component";

@NgModule({
    exports: [RouterModule],
    imports: [
         RouterModule.forRoot([
            {
                component: ProductsComponent,
                path: "products"
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

