import { Component } from "@angular/core";

@Component(
    {
        selector:"mybiodata",
        templateUrl:"my-biodata.html"
    }
)
export class MyBioDataComponent {
    name: string = "Ravi"
    address: string = "Delhi"

}