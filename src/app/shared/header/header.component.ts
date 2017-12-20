import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import pages from '../Pages';

@Component({
    selector: 'prz-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pages = pages;

    @Output() navToggle = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() {
    }

    navOpen() {
        this.navToggle.emit(true);
    }

}
