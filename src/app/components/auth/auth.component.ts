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
         this.dataService.changeMessage(signup);
         this.router.navigate(['products']);
       }else{
         this.message= signup.status;
       }  
    });
   
   }

  openSignupForm(){
   this.router.navigate(['signup']);

  }

  showProfiles(){
   this.router.navigate(['profiles']);
    
  }
}
