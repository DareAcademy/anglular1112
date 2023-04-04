import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  isDisplay:boolean=true
  values=["value1","value2","value3"]

  liEmployee=[{id:1,name:"ahmad"},{id:2,name:"yousef"}]
  onToggle(){
    this.isDisplay=!this.isDisplay
  }


  addClass(){
    let x=4;
    if(x>5){
      return 'xyz'
    }
    else
    {
      return 'abc'
    }
  }

  addStyle(){
    let x=7;
    if(x>5){
      return {'background-color':'blue'}
    }
    else
    {
      return {'background-color':'red'}
    }
  }
}
