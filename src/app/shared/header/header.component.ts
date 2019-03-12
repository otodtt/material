import { Component, Output, EventEmitter, HostListener, ElementRef, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../common/services/changeBreadcrumb.service';

import pages from '../Pages';

@Component({
    selector: 'prz-header',
    templateUrl: './header.component.html',
    // templateUrl: './header-test.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pages = pages;

    changeId: string;
    newBreadcrumbTitle: string;
    newBreadcrumbName: string;
    public isActiveClass: boolean;
    public isCloseDrawer = false;

    public isScrollTop: number;

    @Output() navToggle = new EventEmitter<boolean>();

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.onScroll();
    }

    constructor(
        private el: ElementRef,
        private changeBreadcrumb: ChangeBreadcrumbService
    ) {}

    ngOnInit() {
        this.changeBreadcrumb.changeTitle$.subscribe(
            text => {
                this.newBreadcrumbTitle = text;
            }
        );
        this.changeBreadcrumb.changeName$.subscribe(
            text => {
                this.newBreadcrumbName = text;
            }
        );
        this.changeBreadcrumb.changeId$.subscribe(
            text => {
                this.changeId = text;
            }
        );
    }

    navOpen() {
        this.navToggle.emit(true);
    }
    closeDrawerMenu() {
        this.changeBreadcrumb.emitCloseDrawer(this.isCloseDrawer);
    }
    onScroll() {
        this.isScrollTop = this.el.nativeElement.getBoundingClientRect().top * -1;
    }
    removeClass() {
        this.changeBreadcrumb.emitClass(this.isActiveClass);
    }

}
