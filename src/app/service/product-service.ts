import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Products } from "../model/product";
import "rxjs/add/operator/map";
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

    constructor(private http: Http){
    }

    public loadProducts() : Observable<Products[]> {
        //step is normal response
        let step=this.http.get("http://localhost:3000/v1/products");
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

}