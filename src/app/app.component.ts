import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  public message:string ="Hey I am learning Angular2";
  public num:number=1;  
 
  public constructor(){
    console.log("_@_@_@_Consuctor is called!!!!!!!!");
  }
  //This will be automatically called when component is instantiating
  ngOnInit(): void{
      


      console.log("_@_@_@ngOnInit is called!!!!!!!!");
      let x=5;
      let sum=1;
      for(let p=2;p<=x;p++){
        sum=sum*p;
      }
      this.num=sum; 
      this.cool();
  }

  public cool():void {
    console.log(")@)@)@hey I am cool----0909");
  }
  
}


