import { Products } from './../../model/product';
import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";

import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../service/product-service';
import { AppResponse } from '../../model/app-response';


@Component({
  selector: 'edit-product',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditProduct implements OnInit {
  closeResult: string;

  @Input("eproduct") product: Products;  //product details inputted by product component.data from parent to child
  message : string="";
 
 //this to close the popup programatically 
 private modalReference: NgbModalRef;
  


  @Output()    //here data is sent by child to parent. 
  notify:EventEmitter<Products>=new EventEmitter<Products>();
  
  constructor(private modalService: NgbModal,private productService:ProductService) {
    this.product=new  Products(); 
  }

  public ngOnInit() {
      this.product.name="shoes";
  }

  /**
   * this method is given by default code
   * @param content 
   */
  open(content) {
    //modalReference is the reference of the model to close it later
    this.modalReference=this.modalService.open(content, { size: 'lg', backdrop: 'static' });
    this.modalReference.result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
   
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  /**
   * 
   */
  public editProduct() :void {
      console.log(this.product);
    let data:Observable<AppResponse>=this.productService.updateProduct(this.product);
      //we have to call rest service and eventually we have to uploaed 
      data.subscribe(appResponse =>{
          this.notify.emit(this.product); 
         this.message=appResponse.message;
         //closing model programitically 
         this.modalReference.close();
      });
  }
}