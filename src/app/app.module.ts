import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { CustomerComponent } from './customer/customer.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { users } from './user';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';


const appRoutes:Routes=[
  {path:'emp',component:NewEmployeeComponent},
  {path:'binding',component:DataBindingComponent},
  {path:'directive',component:DirectiveComponent},
  {path:'customer',component:CustomerComponent},
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'frm',component:FormsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NewEmployeeComponent,
    DataBindingComponent,
    DirectiveComponent,
    CustomerComponent,
    NewCustomerComponent,
    CustomerListComponent,
    NewUserComponent,
    UserListComponent,
    LoginComponent,
    HomeComponent,
    FormsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    users
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
