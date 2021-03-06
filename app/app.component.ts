import { Component, OnInit } from '@angular/core';

import {HighlightDirective} from './share/directives/highlight.directive';
import {HeroFormComponent } from './hero/hero-form/hero-form.component';
import {MyTestComponent } from './my-test/my-test.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [HighlightDirective,HeroFormComponent,MyTestComponent]
})
export class AppComponent implements OnInit {
    title = 'Hello Angular!!';
    constructor() { }

    ngOnInit() { }

}