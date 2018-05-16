import { Component, OnInit } from '@angular/core';
import { Products } from '../../model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
//at the time of cart page load i ll by default have empty array of products nad 0 total
  private productsInCart:Products[]=[]; //created an empty array of products
  public total:number=0;                //total initially 0
  constructor() { }

  ngOnInit() {

  }

//this method is called by product.ts/component when user clicks add to cart button.inter component work  
  public addProductToCart(cproduct:Products) {
    this.productsInCart.push(cproduct);
    this.total=this.total+cproduct.price;
    console.log("Product is added into the cart successfully...........");
    console.log(cproduct);
  }
//method to remove product
  public removeProductFromCart(cproduct:Products) {
    this.total=this.total-cproduct.price;
    this.productsInCart=this.productsInCart.filter(item =>item._id!=cproduct._id);
  }

/*
*below methos is called everytime we load product page in order to see if product is added to 
*cart or not. if product is added to cart we display buttons accordingly in products. (add to cart/in cart)
*/
  public inCartProduct(cproduct:Products):boolean {
      var index=this.productsInCart.findIndex(item => item._id === cproduct._id);
        if(index==-1){
           return false;
        }else{
           return true;
        }
      }
    

}
