import {Component, OnInit, Output,Input, EventEmitter} from '@angular/core';

import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { Products } from '../../model/product';
import { ProductService } from '../../service/product-service';
import { AppResponse } from '../../model/app-response';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'add-product',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddProductPopup implements OnInit{
  closeResult: string;   
  product: Products;  //declared which object we need.
  message : string="";   //this is the message we ll pass coming from service layer may b
  modalReference: NgbModalRef; //this is bootstrap import in order to point/refer to modal



  @Input("buttonLable") buttonLable : string="";

  @Output()       //@output decorator is used to send response form child to parent.
  // here we are sending data from addproduct/popup component to Products component we ll send recently added product in it.
  notify:EventEmitter<Products>=new EventEmitter<Products>();

  constructor(private modalService: NgbModal,private productService:ProductService) {
//in the constructor I have two services dependency injections. one for modal service by bootstrap and other for productservice. 
    this.product=new  Products();  //we created new obj of products to recieve data of product.
  }

  ngOnInit(): void {
   // throw new Error("Method not implemented.");
    this.product.name="shoes";
  }

  //below code if to open our modal -contect(pop up)
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

//new method to collect data from pop up and add product details to pass to service layer for addition.

 public addProduct() : void{
 console.log(this.product);
 let data:Observable<AppResponse>=this.productService.addProduct(this.product);
 data.subscribe(appResponse=> {
 this.notify.emit(this.product); // .emit is a notify event in which child ll tell parents which product was added.for display purpose
 this.message=appResponse.message; //setup return message with appResponse.message
 this.modalReference.close();  //close modal/popup we had opened for addint data
  });
 }


}