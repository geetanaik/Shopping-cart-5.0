
/**
 * 
 */
export class Customer {
    
    public name:string;
    public email:string;
    public mobile:string;
    public age:number;
    public married:boolean;

    constructor(name:string,email:string,mobile:string,age:number,married:boolean) {
        this.name=name;
        this.mobile=mobile;
        this.email=email;
        this.age=age;
        this.married=married;
    }
}