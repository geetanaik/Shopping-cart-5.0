import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Products } from '../../model/product';
import { AppGlobal } from '../../config/app.global';
import { CartItem } from '../../model/CartItem';
import { BuiltinMethod } from '@angular/compiler';
import { Item } from '../../model/item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

  export class CheckoutComponent implements OnInit {

  
    public product:Products;
    public value:any;
    public checkoutProductList:Products[];   //creating empty array of products to assign to cart
    public cartItemList: CartItem[]=[];  //create a empty array of CartItems 
    public total:number=0;

   // we need session storage in order to save key value pair of cart. session storage and local storage comes with WEBSTORAGESERVICE 
    constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService,private router: Router) {
       
    }
  
    ngOnInit() {
   // in init---associate checkoutproductlist with CART_KEY
      this.checkoutProductList= this.storage.get(AppGlobal.CART_KEY);

    //we are taking products in cart and moving it to CartItem model data. with product and quantity. 
     this.checkoutProductList.forEach(item => {
       let cartItem=new CartItem(item,1);
       this.cartItemList.push(cartItem);      });
       console.log("CartItem-----",this.cartItemList);
    }

    public removecartitem(cartItem): void{

      this.cartItemList=this.cartItemList.filter(pitem=>pitem.product.pid!=cartItem.product.pid);

    }
    
    public totalproductcost():number{
     this.cartItemList.forEach(item=> {
     this.total=this.total+(item.quantity*item.product.price)
     });
    
    return this.total; 
    
    }
  
    public proceedToPayment(): void{
    console.log("we are proceeding to payment");

    this.storage.set(AppGlobal.PAYMENT_SUMMARY_KEY,this.total);  //new session storage of total price for order
    this.storage.set(AppGlobal.CART_ITEM_KEY,this.cartItemList); //new session storage of items in cart.
    this.router.navigate(['payment']);
   }

    
  
   
    
}
