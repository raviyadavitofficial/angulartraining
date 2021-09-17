import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.css']
})
export class ExpressionComponent implements OnInit {

  name:string = "<b>Ravi</b>";

  messageText = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe(yourName:string){
    this.messageText = "Hi Reader! "+yourName;
  }

}
