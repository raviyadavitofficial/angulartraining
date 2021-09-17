export class Product{
    productId:number;
    productName:string;
    productCountry:string;
    productPrice:number;
    date:Date;

    constructor(productId:number, productName:string, productCountry:string, productPrice:number, date:Date){
        this.productId = productId;
        this.productName = productName;
        this.productCountry = productCountry;
        this.productPrice = productPrice;
        this.date = date;
    }
}