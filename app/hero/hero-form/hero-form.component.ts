import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/hero/hero-form/hero-form.html',
    styleUrls: ['app/hero/hero-form/hero-form.css']
})
export class HeroFormComponent implements OnInit {

    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    active = true;

    constructor() { }

    ngOnInit() { }

    onSubmit() { this.submitted = true; }

    newHero() {
        this.model = new Hero(42, '', '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }


}