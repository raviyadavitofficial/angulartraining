import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class LoginService {

  constructor() { }

  userLogin(username:string, password:string){
    if(username == 'admin' &&password == '1234')
      return true;
    else
      return false;
  }
}
