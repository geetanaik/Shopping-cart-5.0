import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public welcomeMessage:string;

  constructor(private router: Router, private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.welcomeMessage.subscribe(message => this.welcomeMessage = message);
  }

  public logout() :void {
    //if you want to perform
    //some logic like want to save
    //logout time into the database
    this.router.navigate(['']);
  }

}
