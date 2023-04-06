import { Component } from '@angular/core';
import { users } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  _user:users;

  obj:users=new users();

  constructor(user:users){

    this._user=user;
  }
  onLoad(){
    
   this.obj.id=this._user.id; 
   this.obj.name=this._user.name;
  }
}
