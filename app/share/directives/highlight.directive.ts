import { Directive, ElementRef, Input, HostListener }from '@angular/core';

/**
 * HighlightDirective
 * [attribute]: attribute directive, for avoiding collision, we pick up a prefix.
 * 'attribute', not only is the symbol of attribute directive, but alse can be used as an attribute to be binded.
 * we can only use 'attribute' in the element, when the attribute is binded, we can alse use '[attribute]';
 * I prefer the latter, for that angular can give us some tips if some spell error happen.
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