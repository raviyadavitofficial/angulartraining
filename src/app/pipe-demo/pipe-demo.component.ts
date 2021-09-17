import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent  {

  city = "Gurgaon";

  text: string = "Today is Tuesday and date is 7 September 2021";

  todayDate = new Date();

  constructor() { }


}
