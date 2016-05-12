import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1>'
})
export class AppComponent implements OnInit {
    title = 'Hello Angular!!';
    constructor() { }

    ngOnInit() { }

}