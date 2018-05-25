import { Component, OnInit, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { AppGlobal } from '../../config/app.global';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public tprice:number=0;
  constructor(@Inject(SESSION_STORAGE) private storage:WebStorageService) { }

  ngOnInit() {

    this.tprice=this.storage.get(AppGlobal.PAYMENT_SUMMARY_KEY);
  }

}
