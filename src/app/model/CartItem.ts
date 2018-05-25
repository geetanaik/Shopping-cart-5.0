/*
*this is a cart item which contains Product details and quantity of products.
*/

import { Products } from './product';
export class CartItem {
    public product:Products;
    public quantity:number; 
    
    constructor(product:Products,quantity:number){
         this.product=product;   
         this.quantity=quantity
    }
}