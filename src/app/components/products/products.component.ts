import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { ProductService } from '../../service/product-service';
import { Products } from '../../model/product';
import { Observable } from "rxjs/Observable";
import { AppResponse } from '../../model/app-response';
import { CartComponent } from '../cart/cart.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
  })
export class ProductsComponent implements OnInit ,AfterViewInit{

  //@ViewChild(CartComponent)  cart; this helps us to access cart compoenent.
  // we are not using @input/output as they give access to one object only not entire component.
   @ViewChild(CartComponent) 
   private cart:CartComponent;
  
  public product:Products=new Products();

  title = 'app';
  public productList:Products[];
  public appMessage:string="";

    //Dependency injection is Angular2
    public constructor(private productService:ProductService){
      console.log("_@_@_@_Consuctor is called!!!!!!!!");
    }

  ngOnInit() {
    console.log("_@_@_@ngOnInit is called!!!!!!!!");
    //Write code to fecth data from node.js
    let products:Observable<Products[]>=this.productService.loadProducts();
    console.log(products);

    products.subscribe((results)=> {
      console.log(results)
      this.productList=results;
    });

  }
  

  //  /* here is the function in order to fetch product passed by popup with 
  //  * notify emit. So notify.emit is declared in addproduct.ts file which then emits notification to product.html 
  //  * which has this method declared and it points to function written in product.ts
  //  *
  //  * /
   
   public addProductToParent(product:Products): void{
    this.productList.push(product);


   } 
  ngAfterViewInit(){
    console.log("_@_@)ngAfterViewInit@)@");
  }

  //Products is data type class type which is your model
  public deleteProduct(product:Products):void {
    console.log("delete product!!!!!!!!!!!!!!");
    console.log(product);
    console.log(this.productList );
    console.log("------------------------");
    //this.productList =this.productList.filter(function(item){
      //  return item.pid!=product.pid;
    //});
    ///this.productList =this.productList.filter((item) => {
     // return item.pid!=product.pid
    //});
    let responseFromServer:Observable<AppResponse>=this.productService.deleteProductByPid(product._id);
    responseFromServer.subscribe((response)=> {
      console.log(response);
      if(response.status=="success") {
            this.productList =this.productList.filter((item) =>item.pid!=product.pid);
            this.appMessage=response.message;
            this.cart.removeProductFromCart(product);
      }else{
        this.appMessage=response.message;
      }
    });
     console.log(this.productList );
    
  }

  public openAddProduct():void{
    //code to clear old data
    this.product=new Products();
    console.log("@)#)#)#)#)#)##(#(#(");
       ///alert("Yeap");
    //This the angular2 code to open the model
    //this.tproductModel.nativeElement
    //document.getElementById("tproductModel").style
    //this.tproductModel.nativeElement.className = 'modal show';
  }






  public addProduct():void{
    console.log(this.product);
    alert("Product is added!!!!!!!!!!!!!!!!!!");
    let responseFromServer:Observable<AppResponse>=this.productService.addProduct(this.product);
    console.log(responseFromServer);
    responseFromServer.subscribe((response)=> {
      console.log(response);
      if(response.status=="success") {
             this.appMessage=response.message;
            //code to add into the table client side
            this.productList.push(this.product);
      }else{
        this.appMessage=response.message;
      }
    });
    //this.tproductModel.nativeElement.className = 'modal hide';
  }

  public editProduct() :void {
      alert(")@)#)#");
  }

  public closePopup():void {
   // this.tproductModel.nativeElement.className = 'modal hide';
  }

/* below method is to add a product to cart now, this action happened in product page/component and we need to 
*show this in cart page/component. hence we come here in TS/contorller and tell controller to go to method which is present
*inside cart.addProductToCart(). this can be done coz of  @viewchild
*/


  public addProductToCart(product:Products) {
      console.log(")#)#)#)#");
      console.log(product);
      console.log(this.cart);
      this.cart.addProductToCart(product);
  }

  public inCartProduct(product:Products) :boolean {
    return this.cart.inCartProduct(product);
}



public updateProductToParent(uproduct:Products) :void {
         //update the data into the product list only 
         //no  rest call ....
        let index=this.productList.findIndex(item => item._id === uproduct._id);
        console.log(")))index--- ... "+index);
        this.productList[index]= uproduct; 
     }
  

}
