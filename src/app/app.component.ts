import { Component, OnInit } from '@angular/core';
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

  title = 'app';
  public message:string ="Hey I am learning Angular2";
  public num:number=1;  
  public customer:Customer;  
  public productList:Products[];

  public appMessage:string="";
 
  //Dependency injection is Angular2
  public constructor(private productService:ProductService){
    console.log("_@_@_@_Consuctor is called!!!!!!!!");
  }
  //This will be automatically called when component is instantiating
  ngOnInit(): void{
       console.log("_@_@_@ngOnInit is called!!!!!!!!");
      let x=5;
      let sum=1;
      for(let p=2;p<=x;p++){
        sum=sum*p;
      }
      this.num=sum; 
     // this.cool();
      this.customer=new Customer("Nagendra","nagen@gmail.com","+18282722",37,true);
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
  
}


