import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(private router: Router, private loginS: LoginService) { }

  ngOnInit(): void {
  }

  onLogin() {
    let isLoginSuccess: boolean = this.loginS.userLogin(this.username, this.password);
    if (isLoginSuccess){
      localStorage.setItem("username",this.username);
      this.router.navigate(['/home', { "username": this.username }]);
    }
    else
      alert('Invalid username or password');
  }

}
