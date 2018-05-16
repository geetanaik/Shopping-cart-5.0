import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { SignUp } from "../../model/signup.model";
import { SignUpService } from "../../service/signup.service";
import { AppResponse } from "../../model/app-response";

@Component({
    selector: 'profiles',
    templateUrl: './profiles.component.html',
    styleUrls: ['./profiles.component.css']
})
export class ProfilesCompoment implements OnInit {

    public profileList:SignUp[]=[];
    public message="";
   constructor(private SignUpService:SignUpService){}
   
    ngOnInit() {
     
        let profileList:Observable<SignUp[]>=this.SignUpService.loadProfiles();
        console.log(profileList);
    
        profileList.subscribe((results)=> {
          console.log(results)
          this.profileList=results;
        });

    }
    deleteProfile(profile) :void {

        console.log(profile);
          let responsefromserver:Observable<AppResponse>=this.SignUpService.deleteProfileByMid(profile._id);
        responsefromserver.subscribe(response =>{
            this.profileList=this.profileList.filter(item =>item._id!=profile._id);
           this.message=response.message;

        });
    }




    // deleteProfile(profile) :void {
    //     console.log(profile);
    //     let data:Observable<AppResponse> =this.profileService.deleteProfileByMid(profile._id);
    //     data.subscribe(response =>{
    //       this.message=response.message;
    //       this.profilesList=this.profilesList.filter(item =>item._id!=profile._id);
    //     });

    

}