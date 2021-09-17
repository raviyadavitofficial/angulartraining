import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  appTitle: string = "Welcome";

  appStatus: boolean = true;

  fillProductDisabled: boolean = true;

  first:number = 0;
  second:number = 0;

  empList: any[] = [
    {
      "ID": "1",
      "Name": "Ravi Yadav",
      "country": "India"
    },
    {
      "ID": "2",
      "Name": "Allen",
      "country": "UK"
    },
    {
      "ID": "3",
      "Name": "Zoe",
      "country": "Germany"
    }
  ];

  // prodList:any[] = [
  //   {
  //     "ID":"1",
  //     "Name":"Earphone",
  //     "prince":"600"
  //   },
  //   {
  //     "ID":"2",
  //     "Name":"Watch",
  //     "prince":"1300"
  //   },
  //   {
  //     "ID":"3",
  //     "Name":"Ball",
  //     "prince":"1000"
  //   }
  // ];

  prodList: any[] = [
    new Product(1, 'LG', 'UK', 10000,new Date()),
    new Product(2, 'Samsung', 'USA', 15000,new Date()),
    new Product(3, 'OnePlush', 'Japan', 8000,new Date()),
    new Product(4, 'Realme', 'China', 12000,new Date()),
  ];

  toggleDisplay() {
    this.appStatus = !this.appStatus;
  }

  toggleProductList() {
    if (this.prodList.length > 0) {
      this.prodList = [];
    }
    else {
      this.prodList = [
        new Product(1, 'LG', 'UK', 10000,new Date()),
        new Product(2, 'Samsung', 'USA', 15000,new Date()),
        new Product(3, 'OnePlush', 'Japan', 8000,new Date()),
        new Product(4, 'Realme', 'China', 12000,new Date())
      ];
    }
  }

  clearProductList() {
    this.fillProductDisabled = !this.fillProductDisabled;
    this.prodList = [];
  }

  fillProductList() {
    this.fillProductDisabled = !this.fillProductDisabled;
    this.prodList = [
      new Product(1, 'LG', 'UK', 10000,new Date()),
      new Product(2, 'Samsung', 'USA', 15000,new Date()),
      new Product(3, 'OnePlush', 'Japan', 8000,new Date()),
      new Product(4, 'Realme', 'China', 12000,new Date())
    ];
  }

  addNewProduct() {

  }

  deleteProduct(productId:number){
    this.prodList =this.prodList.filter(product=>product.productId!=productId);
    console.log(this.prodList);
  }

  getColor(country: string) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'red';
      case 'Japan':
        return 'blue';
      case 'China':
        return 'silver';
    }
    return 'yellow';
  }
}
