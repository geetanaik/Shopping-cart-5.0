import { Injectable } from "@angular/core";
import { SignUp } from "../model/signup.model";
import { Observable } from "rxjs/Observable";
import { Http,Headers } from "@angular/http";
import { AppResponse } from "../model/app-response";
import { AppSettings } from "../config/app.settings";
import { AuthService } from "./auth.service";


@Injectable()
export class SignUpService{
    
    constructor(private http: Http,private authService:AuthService){
    }
   
 public loadProfiles(): Observable<SignUp[]> {
  

  // new URL pattern in order to implement Auth/token  let step=this.http.get("http://132.148.156.135:444/api/v1" + "/profiles");
         var headers: Headers = new Headers({'user-access-token':this.authService.token});
         let step=this.http.get(AppSettings.API_ENDPOINT+"/profiles",{headers:headers});

        let jsonData=step.map((response) => response.json());
        
        //Iterating all the JavaScript Object and converting into
        //Products type & finally creating Array of Products
         jsonData.map((item) => {
                let model = new SignUp();
                model.username= item.username;
                model.password= item.password;  
                model.email= item.email;
                model.gender= item.gender;
                model.photo= item.photo;
                model._id=item._id
                console.log(item);
                return model;
        });
        return jsonData;

 }

deleteProfileByMid(mid:string): Observable <AppResponse> {

//new URL pattern to implement Auth/token service  let step=this.http.delete(AppSettings.API_ENDPOINT+"/profiles/"+mid);
    var headers: Headers = new Headers({'user-access-token':this.authService.token});
    let step=this.http.get(AppSettings.API_ENDPOINT+"/profiles"+mid,{headers:headers});



//Now we have to read response as json
        //jsonData hold arary of JavaScript object
        //var data={status:"success",message:"Hey! your profile has been deleted successfully into the database!!!!!!!!!!!!!!!"};
		//res.json(data);
        let jsonData=step.map((response) => response.json());
        return jsonData;
 }




 
} 