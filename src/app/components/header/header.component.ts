import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import { SignUp } from '../../model/signup.model';
import { AppGlobal } from '../../config/app.global';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public welcomeMessage:string;
  public signup:SignUp;

  constructor(private router: Router, private dataService: DataService,@Inject(SESSION_STORAGE) private storage: WebStorageService) {

  }

  ngOnInit() {
   // this.dataService.welcomeMessage.subscribe(message => this.welcomeMessage = message);
  
    this.dataService.welcomeMessage.subscribe(signup => {
      this.signup = signup;
    });

         
  }

  public logout() :void {
    //if you want to perform
    //some logic like want to save
    //logout time into the database
     // clear token remove user from local storage to log user out
     localStorage.removeItem('currentUser');
    // sessionStorage.removeItem('checkoutProductList');

     this.storage.remove(AppGlobal.CART_KEY)   //logic to clear cart data associated with session

     console.log("Clear the storage");
    // this.router.navigate(['auth']);
    var signup=new SignUp();
    this.dataService.changeMessage(signup);
    this.router.navigate(['**']);
  }


}
