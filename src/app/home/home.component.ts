import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name!:string
  activatedRoute:ActivatedRoute
constructor(_activatedRoute:ActivatedRoute){

  this.activatedRoute=_activatedRoute;
}

ngOnInit(): void {
  this.name= this.activatedRoute.snapshot.queryParams["username"]
}

}
