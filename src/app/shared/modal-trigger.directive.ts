import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Directive({
// tslint:disable-next-line: directive-selector
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;
    @Input('modal-trigger') modalId: string;

    constructor(elem: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.el = elem.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', () => {
            this.$(`#${this.modalId}`).modal({});
        });
    }
}
