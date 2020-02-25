import { Component } from '@angular/core';

@Component({
    selector:  'app-cha',
    template: 
    `
    <h3> 
     {{value}} 
    </h3>
    <app-contrai></app-contrai>
    `
})

export class ChaComponent{
    value = 0;
}