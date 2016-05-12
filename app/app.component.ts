import { Component, OnInit } from '@angular/core';

import {HighlightDirective} from './share/directives/highlight.directive';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [HighlightDirective]
})
export class AppComponent implements OnInit {
    title = 'Hello Angular!!';
    constructor() { }

    ngOnInit() { }

}