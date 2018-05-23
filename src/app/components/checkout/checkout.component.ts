import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Products } from '../../model/product';
import { AppGlobal } from '../../config/app.global';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

  export class CheckoutComponent implements OnInit {

    public product:Products;
    public value:any;
    public checkoutProductList:Products[];   //creating empty array of products to assign to cart

   // we need session storage in order to save key value pair of cart. session storage and local storage comes with WEBSTORAGESERVICE 
    constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) {
       
    }
  
    ngOnInit() {
   // in init---associate checkoutproductlist with CART_KEY
      this.checkoutProductList= this.storage.get(AppGlobal.CART_KEY);
    }
  
   public prodUpdate(): void{

    console.log("klklklklklklk");
    console.log(this.product);
    console.log(this.value);
   }


   
  
}
