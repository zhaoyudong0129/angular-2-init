import { Directive, ElementRef, Input, HostListener }from '@angular/core';

/**
 * HighlightDirective
 * [attribute]: attribute directive, for avoiding collision, we pick up a prefix.
 */
@Directive({
    selector: '[myHighlight]',
})
export class HighlightDirective {


    @Input('myHighlight')
    highlightColor: string;

    private el: HTMLElement;
    private _defaultColor: string = 'red';


    /**
     * ElementRef: accessing the DOM element
     */
    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    @Input()
    public set defaultColor(v: string) {
        this._defaultColor = v || this._defaultColor;
    }


    @HostListener('mouseenter')
    onMouseEnter() {
        this.highlight(this.highlightColor || this._defaultColor);
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.style.backgroundColor = color;
    }
}