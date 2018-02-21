import { Component, Output, EventEmitter, OnInit, ChangeDetectorRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router, ActivatedRoute } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

import pages from './Pages';
import { ChangeBreadcrumbService } from '../../common/services/changeBreadcrumb.service';
import { ResizeService } from '../../common/services/ResizeService';


@Component({
    selector: 'prz-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, AfterViewInit, OnDestroy  {
    public pages = pages;
    public isOpenPanel = false;
    public isActiveClass = true;
    public panelCheck = 0;
    public checkPage = 0;
    public checkSPIndex = null;

    mode = false;
    openedQuery: MediaQueryList;

    private resizeSubscription: Subscription;
    private _mobileQueryListener: () => void;


    public href: any;

    @Output() navClose = new EventEmitter<boolean>();

    constructor(
        private changeBreadcrumb: ChangeBreadcrumbService,
        private resizeService: ResizeService,
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher,
        private router: Router, private activatedRoute: ActivatedRoute
    ) {
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.openedQuery = media.matchMedia('(max-width: 850px)');
        this.openedQuery.addListener(this._mobileQueryListener);

        const pathUrl = this.activatedRoute.snapshot.firstChild.url[0].path;

        this.pages.forEach( item => {
            if (item.link === pathUrl) {
                this.addRemoveClass(item.id);
            }
            if (item.subPage !== null) {
                item.subPage.forEach(subItem => {
                    if (subItem.link === pathUrl) {
                        this.openClosePanel(item.id);
                        this.addRemoveClass(item.id);
                        this.addClass(item.id, subItem.id);
                    }
                });
            }
        });
    }

    ngOnInit() {
        this.changeBreadcrumb.closeDrawer$.subscribe(
            text => {
                this.onCloseSideMenu();
            }
        );
    }
    ngAfterViewInit() {
        this.resizeSubscription = this.resizeService.onResize$
        .subscribe(size => {
            if (size.innerWidth < 850) {
                this.mode = true;
            }
        });
    }

    onCloseSideMenu() {
        if (this.mode === true || this.openedQuery.matches === true) {
            this.navClose.emit(false);
        }
    }

    openClosePanel(index: number) {
        this.panelCheck = index;
        this.isOpenPanel = !this.isOpenPanel;
        const x = document.getElementById('panel' + index);
        if (x === null) {
            this.isOpenPanel = true;
        }
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

    ngOnDestroy() {
        this.openedQuery.removeListener(this._mobileQueryListener);
        if (this.resizeSubscription) {
          this.resizeSubscription.unsubscribe();
        }
    }
}

