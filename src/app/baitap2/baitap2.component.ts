import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-baitap2',
  templateUrl: './baitap2.component.html',
  styleUrls: ['./baitap2.component.css']
})
export class Baitap2Component implements OnInit {
  @Input() name: String;
  @Input() age: number;
  constructor() { }

  ngOnInit(): void {
  }

}
