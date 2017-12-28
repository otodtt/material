import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import pages from './Pages';
import { ChangeBreadcrumbService } from '../../../common/services/changeBreadcrumb.service';

@Component({
    selector: 'prz-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit  {
    public pages = pages;
    public isOpenPanel = false;
    public isActiveClass = true;
    public panelCheck = 0;
    public checkPage = 0;
    public checkSPIndex = null;

    @Output() navClose = new EventEmitter<boolean>();

    constructor(private changeBreadcrumb: ChangeBreadcrumbService) { }

    ngOnInit() {
        this.changeBreadcrumb.closeDrawer$.subscribe(
            text => {
                this.onCloseSideMenu();
            }
        );
    }

    onCloseSideMenu() {
        this.navClose.emit(false);
    }

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
