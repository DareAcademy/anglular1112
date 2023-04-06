import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent {
  @Output('customerInfo') customerInfo=new EventEmitter<{id:number,name:string}>();

  @ViewChild('txtId') id!:ElementRef;
  @ViewChild('txtName') name!:ElementRef;

  onSave(){
    debugger
  
    this.customerInfo.emit({
      id:this.id.nativeElement.value,
      name:this.name.nativeElement.value
    })
  }
}
