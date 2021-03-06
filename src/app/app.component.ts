import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Customer } from './model/customer';
import { ProductService } from './service/product-service';
import { Observable } from "rxjs/Observable";
import { Products } from './model/product';
import { AppResponse } from './model/app-response';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //This is referring my pupop model component
  @ViewChild('productModel') tproductModel:ElementRef;

  public product:Products=new Products();

  title = 'app';
  public productList:Products[];
  public appMessage:string="";
 
  //Dependency injection is Angular2
  public constructor(private productService:ProductService){
    console.log("_@_@_@_Consuctor is called!!!!!!!!");
  }
  //This will be automatically called when component is instantiating
  ngOnInit(): void{
       console.log("_@_@_@ngOnInit is called!!!!!!!!");
      //Write code to fecth data from node.js
      let products:Observable<Products[]>=this.productService.loadProducts();
      console.log(products);

      products.subscribe((results)=> {
        console.log(results)
        this.productList=results;
      });
      //products.subscribe(function(results){
        // console.log(results); 
      //});

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
    this.tproductModel.nativeElement.className = 'modal show';
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
    this.tproductModel.nativeElement.className = 'modal hide';
  }

  public closePopup():void {
    this.tproductModel.nativeElement.className = 'modal hide';
  }
  
}


