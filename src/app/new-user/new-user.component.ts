import { Component, ElementRef, ViewChild } from '@angular/core';
import { users } from '../user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  @ViewChild('txtId') id!:ElementRef;
  @ViewChild('txtName') name!:ElementRef;
  
  _user:users
  constructor(user:users){
    this._user=user;
  }
  onSave(){
    this._user.id=this.id.nativeElement.value
    this._user.name=this.name.nativeElement.value
    // var obj=new users()
  }
}
