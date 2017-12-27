import { Component, OnInit } from '@angular/core';

import pages from './Pages';

@Component({
    selector: 'prz-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
    public pages = pages;
    public isOpenPanel = false;
    public isActiveClass = true;
    public panelCheck = 0;
    public checkPage = 0;
    public checkSPIndex = null;

    constructor() { }

    ngOnInit() {}

    openClosePanel(index: number, id: any) {
        this.isOpenPanel = true;
        this.panelCheck = index;
    }
    addClass(index: number, spIndex: number) {
        this.isActiveClass = true;
        this.checkPage = index;
        this.checkSPIndex = spIndex;
    }
    addRemoveClass(index: number) {
        this.isActiveClass = true;
        this.checkPage = index;
        this.checkSPIndex = null;
    }
}
