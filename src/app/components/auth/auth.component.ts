import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public user:User=new User();

  public message:string="";

  constructor(private authService:AuthService) {

  }

  ngOnInit() {
  }

  authUser() :void{
      if(this.user.username=="rock" && this.user.password=="test"){
        this.message="Hey! you are valid user";
      }else{
        this.message="Sorry! username and password are not valid user";
      }
  }

}
