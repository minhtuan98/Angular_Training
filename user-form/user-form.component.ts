import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name = "";
  isHighlight = true;
  eventStyle = {color: 'green' , fontSize:'40px'};
  oddStyle = {color: 'blue' , fontSize:'60px'};
  currentClass = {cricle: !this.isHighlight , square : this.isHighlight};

  constructor() { }

  ngOnInit(){}

}
