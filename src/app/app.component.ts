import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recruitment';
  countryList:country[]=[
    new country("1","India"),
    new country("1","Austrelia"),
    new country("1","New Zealand"),
    new country("1","Nepal"),

  ]

}

class country
{
  id:string;
  name:string;
  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }
  
}