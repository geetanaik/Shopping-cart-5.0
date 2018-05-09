import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { AuthService } from '../../service/auth.service';
import { Observable } from "rxjs/Observable";
import { AppResponse } from "../../model/app-response";
import {Router} from "@angular/router";
import { DataService } from '../../service/data.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public user:User=new User();

  public message:string="";

  constructor(private authService:AuthService,private router: Router,private dataService:DataService) {

  }

  ngOnInit() {
    this.dataService.welcomeMessage.subscribe(message => this.message = message)
  }

  authUser() :void{

   let responseData:Observable<AppResponse>=this.authService.authUser(this.user);
   responseData.subscribe(data=>{
      //code to move to another screen
      if(data.status=="pass"){
        this.dataService.changeMessage("Hello Mr. "+this.user.username);
        this.router.navigate(['products']);
      }else{
        this.message= data.message;
      }  
   });
  
  }
}
