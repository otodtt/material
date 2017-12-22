import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import pages from '../Pages';

@Component({
    selector: 'prz-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
    public pages = pages;
    public fillerShow = null;

    @Output() navClose = new EventEmitter<boolean>();
    constructor() { }

    ngOnInit() {
    }

    showFiller(index: number) {
        if (this.fillerShow === index) {
            this.fillerShow = null;
        } else {
            this.fillerShow = index;
        }
    }

    onCloseMenu() {
        this.navClose.emit(false);
    }

}
