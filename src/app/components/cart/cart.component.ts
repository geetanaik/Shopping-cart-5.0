import { Component, OnInit } from '@angular/core';
import { Products } from '../../model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private productsInCart:Products[]=[];
  public total:number=0;
  constructor() { }

  ngOnInit() {

  }

  public addProductToCart(cproduct:Products) {
    this.productsInCart.push(cproduct);
    this.total=this.total+cproduct.price;
    console.log("Product is added into the cart successfully...........");
    console.log(cproduct);
  }

  public removeProductFromCart(cproduct:Products) {
    this.total=this.total-cproduct.price;
    this.productsInCart=this.productsInCart.filter(item =>item._id!=cproduct._id);
  }

}
