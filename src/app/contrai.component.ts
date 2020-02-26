import { Component,Output,EventEmitter } from '@angular/core';


@Component({
    selector:  'app-contrai',
    template: `
    <button (click)="addforparent()">ADD</button>
    <button (click)="subforparent()">Sub</button>
    `
})

export class ContraiComponent{
        @Output() myClick = new EventEmitter<boolean>();
    addforparent(){
        this.myClick.emit(true);
    }
    subforparent(){
        this.myClick.emit(false);
    }

}