import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  name1!:string;
  name:string="Ahmad";
  btnValue:string="Save";
  IsDisabled:boolean=true

print(){
  console.log("click event Fire!")
}

print1(){
  console.log("dblclick event Fire!")
}

print3(){
  console.log("change event Fire!")
}
print4(){
  this.IsDisabled=false;
  console.log("focus event Fire!")
}

print5(){
  console.log("blur event Fire!")
}

print6(){
  console.log("mouseover event Fire!")
}
print7(){
  console.log("mouseout event Fire!")
}

onSave(){
  console.log("the name is "+this.name1)
}

}

