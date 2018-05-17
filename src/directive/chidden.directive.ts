import { OnInit,Directive,Input,ElementRef,Renderer } from '@angular/core';

/**
 * Writting custom attribute directive tag
 */
@Directive({
    selector : '[chidden]'
  })
export class CHidden implements OnInit{

   @Input("chidden") 
   lhidden:boolean=false; 

   /**
    * 
    * @param elem - access the element where we want to
    * apply the directive tag
    * @param renderer 
    *  using this we can hide and show the element
    */
   constructor(private elem:ElementRef ,private renderer:Renderer) {

   }

   ngOnInit() :void {
     console.log("this.lhidden = "+this.lhidden);  
     if(this.lhidden){   
        this.renderer.setElementStyle(this.elem.nativeElement,'display','none');
     } 
   }

}
//<span  [chidden] ="true">Some Message!</span>