import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit  {

  form!:FormGroup

  formBuilder:FormBuilder
  constructor(_formBuilder:FormBuilder){
    this.formBuilder=_formBuilder;
  }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      txtName:['',Validators.required],
      txtSalary:['',Validators.min(100)],
      txtEmail:['',Validators.compose([Validators.required,Validators.email])]
    })
    
  }

  onSave(){
    debugger
    if(this.form.valid){
    console.log(this.form)
    console.log(this.form.value['txtName'])
    console.log(this.form.value['txtSalary'])
    }
  }



}
