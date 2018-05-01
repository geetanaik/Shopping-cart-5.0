import { Component, OnInit } from '@angular/core';
import { Customer } from './model/customer';
import { ProductService } from './service/product-service';
import { Observable } from "rxjs/Observable";
import { Products } from './model/product';
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
      this.cool();
      this.customer=new Customer("Nagendra","nagen@gmail.com","+18282722",37,true);
      //Write code to fecth data from node.js
      let products:Observable<Products[]>=this.productService.loadProducts();
      products.subscribe((results)=> {
        console.log(results)
      });
      //products.subscribe(function(results){
        // console.log(results); 
      //});

  }

  public cool():void {
    console.log(")@)@)@hey I am cool----0909");
  }
  
}


