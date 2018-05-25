/**
 * This is item details present inside
 * shopping
 */
import { PaymentDetails } from './PaymentDetails';
import { ShippingAddress } from './ShippingAddress';
import { Item } from './item.model';
export class Order {
    public orderid:string; 
    public userid:string;
    public items:Item[]=[];
    public totalOrder:number;
    public tax:number;
    public discount:number;
    public shippingAddress:ShippingAddress;
    public paymentDetails:PaymentDetails;

}