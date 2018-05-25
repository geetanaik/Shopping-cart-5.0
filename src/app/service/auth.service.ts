import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { AppResponse } from "../model/app-response";
import { AppSettings } from '../config/app.settings';
import { SignUp } from '../model/signup.model';

@Injectable()
export class AuthService {
  public token:string;
  constructor(private http:Http) {
     // set token if saved in local storage
      //This will be helpful when ever we refresh page
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.token = currentUser && currentUser.token;

   }

    /**
      * 
      * @param mid mongoid given to the added product
      * by the mongodb database
      */
     //public authUser(user:User) : Observable<AppResponse> {
      public authUser(user:User) : Observable<SignUp>{ 
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
     // let step=this.http.post("http://localhost:3000/v1/auth",user,options);
      //let step=this.http.post(AppSettings.API_ENDPOINT+'/auth',user,options );
      let step=this.http.post(AppSettings.AUTH_ENDPOINT+"/auth",user,options); //going to authenticate and generate token
      //Now we have to read response as json
      //jsonData hold arary of JavaScript object
      //var data={status:"success",message:"Hey! your profile has been deleted successfully into the database!!!!!!!!!!!!!!!"};
  //res.json(data);
      let jsonData=step.map((response) => response.json());
      return jsonData;
   }

  //public signupUser(signup:)

  /**
      * 
      * @param mid mongoid given to the added product
      * by the mongodb database
      */
     public signupUser(signup:SignUp) : Observable<AppResponse> {
      //setting data into post
      var options = new RequestOptions({
          headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'})
        });
      // first - URI
      //second //product =body
      //third  options =header
      //let step=this.http.post(AppSettings.API_ENDPOINT+"/signup",signup,options);
      let step=this.http.post(AppSettings.AUTH_ENDPOINT+"/signup",signup,options);
      //Now we have to read response as json
      //jsonData hold arary of JavaScript object
      //var data={status:"success",message:"Hey! your profile has been deleted successfully into the database!!!!!!!!!!!!!!!"};
    //res.json(data);
        //export class AppResponse {
      ///public status:string;      
      //public message:string;      
///}
    //{status:"success",message:"Hey! your profile has been deleted successfully into the database!!!!!!!!!!!!!!!"};
      let jsonData=step.map((response) => response.json());
      return jsonData;
   }


   


  

}
