import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-baitap',
  templateUrl: './baitap.component.html',
  styleUrls: ['./baitap.component.css']
})
export class BaitapComponent implements OnInit {
  @Input() name: string;
  @Input() age: number;
  @Output() removePerson = new EventEmitter();
  arrInfo = [
    {name:'Minh',age:23},
    {name:'Tuan',age:25}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  XoaThongTin(){
    this.removePerson.emit(this.name);
  }
}
