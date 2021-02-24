import { Component, Output, EventEmitter, AfterViewInit } from '@angular/core';

/** Services */
import { ChangeBreadcrumbService } from '../../common/services/changeBreadcrumb.service';

import pages from '../Pages';
import { MenuButtonAnimation } from './animations';

@Component({
    selector: 'prz-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
    animations: [ MenuButtonAnimation ]
})
export class SideNavComponent implements AfterViewInit {

    @Output() navClose = new EventEmitter<boolean>();
    public pages = pages;
    public subPages: any;

    public state = 'default';
    public stateSub = 'default-sub';
    public isClicked = false;
    public isActiveClass = false;
    public pageId: number;

    constructor(private changeBreadcrumb: ChangeBreadcrumbService) { }

    ngAfterViewInit() {
        this.changeBreadcrumb.changeClass$.subscribe(
            text => {
                this.isActiveClass = text;
            }
        );
    }

    onCloseMenu() {
        this.navClose.emit(false);
    }

    rotate(index?) {
        this.state = (this.state === 'default' ? 'hidden' : 'default');
        this.stateSub = (this.stateSub === 'default-sub' ? 'shown' : 'default-sub');
        this.isClicked = true;
        this.subPages = this.pages[index].subPage;
    }

    returnDefaultMenu() {
        this.state = (this.state === 'default' ? 'hidden' : 'default');
        this.stateSub = (this.stateSub === 'default-sub' ? 'shown' : 'default-sub');
        this.isClicked = false;
    }
    addClass(id: number) {
        this.isActiveClass = true;
        this.pageId = id;
    }
    removeClass() {
        this.isActiveClass = false;
    }
}
