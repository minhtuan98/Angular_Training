import { Component } from '@angular/core';

@Component({
    selector:  'app-cha',
    template: 
    `<h3> {{value}} </h3>
    <app-contrai (myClick) ="AddofSub($event);"></app-contrai>
    `
})

export class ChaComponent{
    value = 0;
    AddofSub(isadd : boolean){
        if(isadd) {
            this.value = this.value +1;
        }else{
            this.value = this.value -1;
        }
    }
}