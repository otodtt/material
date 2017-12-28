import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
    selector: 'prz-scroll-button',
    templateUrl: './scroll-button.component.html',
    styleUrls: ['./scroll-button.component.scss']
})
export class ScrollButtonComponent implements OnInit {
    public isScrollTop: number;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.onScroll();
    }
    constructor(private el: ElementRef) { }

    ngOnInit() {}

    onScroll() {
        this.isScrollTop = this.el.nativeElement.getBoundingClientRect().top * -1;
    }

    scrollToTop() {
        // animate({scrollTop : 0}, 800);
        this.el.nativeElement.getBoundingClientRect();
        // console.log(this.el.nativeElement);
        // window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }

}
