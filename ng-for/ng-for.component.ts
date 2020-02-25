import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  arrMonhoc =['angular','NodeJS','React'];
  constructor() { }

  ngOnInit(): void {
  }

}
