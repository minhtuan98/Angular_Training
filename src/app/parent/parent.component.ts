import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  template: `<button (click)="onaddforchild();"> Add for child </button>
            <app-child #child></app-child>
  `
  })
export class ParentComponent {
  @ViewChild(ChildComponent)
  myChild : ChildComponent;

  onaddforchild(){
    this.myChild.value += 1;
  }

}
