import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
    selector: 'prz-scroll-button',
    templateUrl: './scroll-button.component.html',
    styleUrls: ['./scroll-button.component.scss']
})
export class ScrollButtonComponent implements OnInit {
    public isScrollTop: number;

    constructor(private el: ElementRef) { }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.onScroll();
    }

    ngOnInit() {}

    onScroll() {
        this.isScrollTop = this.el.nativeElement.getBoundingClientRect().top * -1;
    }

    scrollToTop() {
        this.el.nativeElement.getBoundingClientRect();
        window.scrollTo({ left: 0, top: 0 });
    }

}
