import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('txtUsername') txtUsername!:ElementRef
  router:Router
  constructor(_router:Router){
    this.router=_router;
  }

  onLogin(){
    // login
    // navigate to home component

    this.router.navigate(['/home'],{queryParams:{username:this.txtUsername.nativeElement.value}})
  }
}
