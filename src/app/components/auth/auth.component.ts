import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { AuthService } from '../../service/auth.service';
import { Observable } from "rxjs/Observable";
import { AppResponse } from "../../model/app-response";
import {Router} from "@angular/router";
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public user:User=new User();

  public message:string="";

  constructor(private authService:AuthService,private router: Router) {

  }

  ngOnInit() {
  }

  authUser() :void{

   let responseData:Observable<AppResponse>=this.authService.authUser(this.user);
   responseData.subscribe(data=>{
      //code to move to another screen
      if(data.status=="pass"){
        this.router.navigate(['products']);
      }else{
        this.message= data.message;
      }  
   });
  
  }
}
