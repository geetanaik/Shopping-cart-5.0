import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
  selector: 'order-summary',
  templateUrl: './order.component-summary.html',
  styleUrls: ['./order.component-summary.css']
})
 export class OrderSummaryComponent implements OnInit {

    @Input("ptotalPrice")
    public ptotalPrice :number;
 
    ngOnInit() {
    }
 
 }