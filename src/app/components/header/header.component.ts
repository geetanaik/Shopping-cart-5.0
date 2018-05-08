import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  public logout() :void {
    //if you want to perform
    //some logic like want to save
    //logout time into the database
    this.router.navigate(['']);
  }

}
