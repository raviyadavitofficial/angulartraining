import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-honme',
  templateUrl: './honme.component.html',
  styleUrls: ['./honme.component.css']
})
export class HonmeComponent implements OnInit {

  userName:string = "";

  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.userName= this.activateRoute.snapshot.paramMap.get("username")!;
    alert("Welcome "+this.activateRoute.snapshot.paramMap.get("username"));
  }

}
