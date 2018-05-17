import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import { SignUp } from '../../model/signup.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router,private dataService:DataService) {

  }

  ngOnInit() {
  }

  public logout() :void {
    //if you want to perform
    //some logic like want to save
    //logout time into the database
   // this.dataService.changeMessage("...");
    var signup=new SignUp();
    this.dataService.changeMessage(signup);
    this.router.navigate(['']);
  }

}
