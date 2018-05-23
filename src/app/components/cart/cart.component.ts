// // 



// import { Component, OnInit,Inject } from '@angular/core';
// import { Products } from '../../model/product';
// import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
// import { PipeResolver } from '@angular/compiler';
// import { AppGlobal } from '../../config/app.global';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   //creating empty array
//   private productsInCart:Products[]=[];
//   public total:number=0;

//   constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) {
     
//   }

//   ngOnInit() {
//      var tt=this.storage.get(AppGlobal.CART_KEY);
//      if(tt!=null){
//       this.productsInCart= this.storage.get(AppGlobal.CART_KEY);
//      } 
//   }

//   public addProductToCart(cproduct:Products) {
//     console.log("addProductToCart in cart!");
//     var cartItemsInSession=this.storage.get(AppGlobal.CART_KEY);
//     console.log("---- = "+cartItemsInSession);
    
//     if(cartItemsInSession==null) {
//       console.log(cartItemsInSession);
//       var products=[];
//       products.push(cproduct);
//       this.storage.set(AppGlobal.CART_KEY, products);
//     }else{
//       console.log(cartItemsInSession);
//       var index=cartItemsInSession.findIndex(item => item._id === cproduct._id);
//       if(index===-1)
//       cartItemsInSession.push(cproduct);
//       this.storage.set(AppGlobal.CART_KEY, cartItemsInSession);
//     }

//     this.productsInCart.push(cproduct);
//     this.total=this.total+cproduct.price;
//     console.log("Product is added into the cart successfully...........");
//     console.log(cproduct);
//   }

//   public removeProductFromCart(cproduct:Products) {
//     this.total=this.total-cproduct.price;
//     this.productsInCart=this.productsInCart.filter(item =>item._id!=cproduct._id);
//   }

    
//   public inCartProduct(cproduct:Products):boolean {
//     var index=this.productsInCart.findIndex(item => item._id === cproduct._id);
//     if(index==-1){
//        return false;
//     }else{
//        return true;
//     }
//   }
// }


import { Component, OnInit,Inject } from '@angular/core';
import { Products } from '../../model/product';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { PipeResolver } from '@angular/compiler';
import { AppGlobal } from '../../config/app.global';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //creating empty array of products and total=0 to associate with cart by default even before we add any.
  private productsInCart:Products[]=[];
  public total:number=0;

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) {
     
  }

  ngOnInit() {
    // get a variable assign session storage cart Key-value pair to it.  to check if there is anything in session storage in cart. 
     var tt=this.storage.get(AppGlobal.CART_KEY);
     if(tt!=null){
      this.productsInCart= this.storage.get(AppGlobal.CART_KEY);
     } 
  }

  //this method is called by product.ts in order to add products to cart. this was enabled via @viewchild.
  public addProductToCart(cproduct:Products) {
    console.log("addProductToCart in cart from cart.ts");
    var cartItemsInSession=this.storage.get(AppGlobal.CART_KEY);  //variable to access/work on cart in this session
    console.log("---- = "+cartItemsInSession);
    
    //check if anything alrady present in session area. if null/not then push data in product array.
    if(cartItemsInSession==null) {
      console.log(cartItemsInSession);
      var products=[];      
      products.push(cproduct);
      this.storage.set(AppGlobal.CART_KEY, products);
    }
    //if there is already something in cart then add new product to it.
    else{
      console.log(cartItemsInSession);
      var index=cartItemsInSession.findIndex(item => item._id === cproduct._id);
      if(index===-1)
      cartItemsInSession.push(cproduct);
      this.storage.set(AppGlobal.CART_KEY, cartItemsInSession);
    }

    this.productsInCart.push(cproduct);
    this.total=this.total+cproduct.price;
    console.log("Product is added into the cart successfully...........");
    console.log(cproduct);
  }

  public removeProductFromCart(cproduct:Products) {
    this.total=this.total-cproduct.price;
    this.productsInCart=this.productsInCart.filter(item =>item._id!=cproduct._id);
  }

    
  public inCartProduct(cproduct:Products):boolean {
    var index=this.productsInCart.findIndex(item => item._id === cproduct._id);
    if(index==-1){
       return false;
    }else{
       return true;
    }
  }

}
