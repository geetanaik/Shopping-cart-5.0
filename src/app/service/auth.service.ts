import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { AppResponse } from "../model/app-response";

@Injectable()
export class AuthService {

  constructor(private http:Http) {

   }

    /**
      * 
      * @param mid mongoid given to the added product
      * by the mongodb database
      */
     public authUser(user:User) : Observable<AppResponse> {
      //step is normal response
      //console.log("mid  = "+mid);
      console.log("_@_@_@Uploading produc data!");
      console.log(user);
      //setting data into post
      var options = new RequestOptions({
          headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'})
        });
      // first - URI
      //second //product =body
      //third  options =header
      let step=this.http.post("http://localhost:444/v1/auth",user,options);
      //Now we have to read response as json
      //jsonData hold arary of JavaScript object
      //var data={status:"success",message:"Hey! your profile has been deleted successfully into the database!!!!!!!!!!!!!!!"};
  //res.json(data);
      let jsonData=step.map((response) => response.json());
      return jsonData;
   }

}
