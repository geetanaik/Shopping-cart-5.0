import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { AuthService } from '../../service/auth.service';
import { Observable } from "rxjs/Observable";
import { AppResponse } from "../../model/app-response";
import {Router} from "@angular/router";
import { DataService } from '../../service/data.service';
import { SignUp } from '../../model/signup.model';
@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signup:SignUp=new SignUp();

  public message:string="";

  constructor(private authService:AuthService,private router: Router,private dataService:DataService) {

  }

  ngOnInit() {
    this.dataService.welcomeMessage.subscribe(message => this.message = message)
  }
  /**
   * this ,ethod ll b called by HTML when user click on signup button
   */

  public SignupUser() :void{

   alert("executing signup method in signup.ts");
   console.log(this.signup);
   
   //now call RestAPI calling function here
   
  
  }
}
