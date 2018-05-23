import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { AuthService } from '../../service/auth.service';
import { Observable } from "rxjs/Observable";
import { AppResponse } from "../../model/app-response";
import {Router} from "@angular/router";
import { DataService } from '../../service/data.service';
import { SignUp } from '../../model/signup.model';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public user:User=new User();

  public message:string="";
  public showhide : boolean = false;

  constructor(private authService:AuthService,private router: Router,private dataService:DataService) {

  }

  ngOnInit() {
  //  this.dataService.welcomeMessage.subscribe(message => this.message = message)
  }

  // authUser() :void{

  //  let responseData:Observable<AppResponse>=this.authService.authUser(this.user);
  //  responseData.subscribe(data=>{
  //     //code to move to another screen
  //     if(data.status=="pass"){
  //       this.dataService.changeMessage("Hello Mr. "+this.user.username);
  //       this.router.navigate(['products']);
  //     }else{
  //       this.message= data.message;
  //     }  
  //  });
  
  // }


  
  authUser() :void{

    let responseData:Observable<SignUp>=this.authService.authUser(this.user);
    responseData.subscribe(signup=>{
       //code to move to another screen
       if(signup.status=="pass"){
         this.dataService.changeMessage(signup); //assigning my data to dataService.
         console.log("signup.token coming from server =  "+signup.token); //printing token
        //Here we want to store usenrame , role and token into the local storage
        //so that all these information should be available through the application
        var currentUser={username:signup.username,role:signup.role,token:signup.token};
        //adding information into the local storage
        //Below is JSON string data
        //{"username":"nagendra","role":"admin","token":"8H*#&#&#&#^&#^#^#^#^"}
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        this.authService.token=signup.token;    //we are also keeping it in another global variable to avoid accessing 
        //all the time from local Storage.


         this.router.navigate(['products']);
       }else{
        localStorage.removeItem('currentUser');   //if autherization didnt go through remove user dtails.
         this.message= signup.status;
       }  
    });
   
   }

  public logout(): void {
    // clear token remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['auth']);
  }


  openSignupForm(){
   this.router.navigate(['signup']);

  }

  showProfiles(){
   this.router.navigate(['profiles']);
    
  }
}
