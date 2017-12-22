import { Component, OnInit, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

import pages from '../Pages';

@Component({
    selector: 'prz-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pages = pages;
    public isScrollTop: number;

    @Output() navToggle = new EventEmitter<boolean>();

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.onScroll();
    }

    constructor(private el: ElementRef) { }

    ngOnInit() {}

    navOpen() {
        this.navToggle.emit(true);
    }

    onScroll() {
        this.isScrollTop = this.el.nativeElement.getBoundingClientRect().top * -1;
    }

}
