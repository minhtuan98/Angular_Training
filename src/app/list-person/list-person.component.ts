import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  @Input() name: string;
  @Input() age: number;
  @Input() bloodtype: string;
  arrinfo = [
    {name: 'tran',age:18,bloodtype:'A'},
    {name: 'minh',age:18,bloodtype:'A'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
