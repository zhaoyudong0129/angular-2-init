import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-test',
    template:`
    <div class="jumbotron">
        <input value="Hello World !" #input> {{ input.value }}
        <button (click)="onClick()">Click Me</button>
    </div>
    `
})
export class MyTestComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    
    onClick(){
        // console.log("click me");
        debugger;
    }

}