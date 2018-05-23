import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

/*we are having Authgaurd as intersecptor which implements canactivate interface.
* now, this authguard will if user matches currentuser data in localstorage.if its null that means user never signed in and needs to be autherrized.
* 
* also, in spp.route.ts file, we ll have to call this authguard before loading certain pages like, products, profiles,cart, checkout etc.
*
*also, we need to register this interseptor to app.module.ts
*/
@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(private router: Router){

    }
    canActivate() {
        console.log("canActivate is called to check user");
        console.log(localStorage.getItem('currentUser'));
        if(localStorage.getItem('currentUser')){
            return true;
        }
        else{
        this.router.navigate(['/auth']);
        return false;
        }

    }
}