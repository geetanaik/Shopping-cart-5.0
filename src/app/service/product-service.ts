import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Products } from "../model/product";
import "rxjs/add/operator/map";
import { AppResponse } from "../model/app-response";
import { AppSettings } from "../config/app.settings";
import { AuthService } from "./auth.service";
/**
 * this is class which is used to bring data from rest api and
 * this data will be used inside component class
 *   providers: [ProductService],
     bootstrap: [AppComponent]
     do not forget to mention this service class inside 
     app-module.ts as shown in above
 * 
 */
@Injectable()
export class ProductService{

   
    constructor(private http: Http, private authService:AuthService){
    }

    public loadProducts() : Observable<Products[]> {
        
        
        //step is normal response
        //let step=this.http.get("http://localhost:444/v1/products");
        //let step=this.http.get("http://132.148.156.135:444/api/v1/products");
        //now we have to change service link in order to get authentication data from server.
        //How to set data into header
        var headers: Headers = new Headers({'user-access-token':this.authService.token}); //setting java script object variable 'user-access-token' with token details in header.
        //we have to send toekn in header. as body may not always be there. hence always in token
        //How to set token in the header before making request
        //to server
        //step is normal response
        let step=this.http.get(AppSettings.API_ENDPOINT+"/products",{headers:headers});



        //Now we have to read response as json
        //jsonData hold arary of JavaScript object
        let jsonData=step.map((response) => response.json());
        //Iterating all the JavaScript Object and converting into
        //Products type & finally creating Array of Products
         jsonData.map((item) => {
                let model = new Products();
                model.pid= item.pid;
                model.name= item.name;  
                model.image= item.image;
                model.price= item.price;
                model.store= item.store;
                model.mfg= item.mfg;
                model.category= item.category;
                console.log(item);
                return model;
        });
        return jsonData;
     }

     /**
      * 
      * @param mid mongoid given to the added product
      * by the mongodb database
      */
     public deleteProductByPid(mid:string) : Observable<AppResponse> {
        //step is normal response
        console.log("mid  = "+mid);
       // let step=this.http.delete("http://localhost:444/v1/products/"+mid);
      //**new auth URL pattern to in order to send token as well let step=this.http.delete(AppSettings.API_ENDPOINT+"/products/"+mid);


       //How to set data into header
        var headers: Headers = new Headers({'user-access-token':this.authService.token});
        let step=this.http.delete(AppSettings.API_ENDPOINT+"/products/"+mid,{headers:headers});
        //Now we have to read response as json
        //jsonData hold arary of JavaScript object
        //var data={status:"success",message:"Hey! your profile has been deleted successfully into the database!!!!!!!!!!!!!!!"};
		//res.json(data);
        let jsonData=step.map((response) => response.json());
        return jsonData;
     }

      /**
      * 
      * @param mid mongoid given to the added product
      * by the mongodb database
      */
     public addProduct(product:Products) : Observable<AppResponse> {
        //step is normal response
        //console.log("mid  = "+mid);
        console.log("_@_@_@Uploading produc data!");
        console.log(product);
        //setting data into post
        var options = new RequestOptions({
            headers: new Headers({
              'Accept': 'application/json',
//now new content type in header               'Content-Type': 'application/json'})
             'Content-Type': 'application/json','user-access-token':this.authService.token}) //containts with token
          });
        // first - URI
        //second //product =body
        //third  options =header
        //let step=this.http.post("http://localhost:444/v1/products",product,options);
        let step=this.http.post(AppSettings.API_ENDPOINT+"/products",product,options);
        //Now we have to read response as json
        //jsonData hold arary of JavaScript object
        //var data={status:"success",message:"Hey! your profile has been deleted successfully into the database!!!!!!!!!!!!!!!"};
		//res.json(data);
        let jsonData=step.map((response) => response.json());
        return jsonData;
     }
    

     /**
      * 
      * @param mid mongoid given to the added product
      * by the mongodb database
      */
     public updateProduct(product:Products) : Observable<AppResponse> {
        //step is normal response
        //console.log("mid  = "+mid);
        console.log("_@_@_@Uploading produc data!");
        console.log(product);
        //setting data into post
        var options = new RequestOptions({
            headers: new Headers({
              'Accept': 'application/json',
          //new content type    'Content-Type': 'application/json'})
          'Content-Type': 'application/json','user-access-token':this.authService.token}) //send token detailsin contents
          });
        // first - URI
        //second //product =body
        //third  options =header
        let step=this.http.put(AppSettings.API_ENDPOINT+"/products",product,options);
        //Now we have to read response as json
        //jsonData hold arary of JavaScript object
        //var data={status:"success",message:"Hey! your profile has been deleted successfully into the database!!!!!!!!!!!!!!!"};
		//res.json(data);
        let jsonData=step.map((response) => response.json());
        return jsonData;
     }


}