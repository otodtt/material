import { Component, OnInit, ChangeDetectorRef, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';

import { ChangeBreadcrumbService } from '../../common/services/changeBreadcrumb.service';
import { ResizeService } from '../../common/services/ResizeService';

@Component({
    templateUrl: './thresholds-dialog.component.html',
    styleUrls: ['./thresholds.component.scss']
})
export class ThresholdsDialogComponent {}

@Component({
    templateUrl: './thresholds.component.html',
    styleUrls: ['./thresholds.component.scss']
})
export class ThresholdsComponent implements OnInit, OnDestroy, AfterViewInit {
    headerId = 'aa-management';
    breadcrumbTitle = 'ПИВ';

    mode = 'side';
    openedQuery: MediaQueryList;
    mediumQuery: MediaQueryList;
    smallQuery: MediaQueryList;

    private resizeSubscription: Subscription;
    private _mobileQueryListener: () => void;

    constructor(
        private changeBreadcrumb: ChangeBreadcrumbService,
        private resizeService: ResizeService,
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher,
        public dialog: MatDialog,
    ) {
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.openedQuery = media.matchMedia('(max-width: 850px)');
// tslint:disable-next-line: deprecation
        this.openedQuery.addListener(this._mobileQueryListener);

        this.mediumQuery = media.matchMedia('(max-width: 768px)');
        // tslint:disable-next-line: deprecation
        this.mediumQuery.addListener(this._mobileQueryListener);

        this.smallQuery = media.matchMedia('(max-width: 481px)');
        // tslint:disable-next-line: deprecation
        this.smallQuery.addListener(this._mobileQueryListener);

        if (this.mediumQuery.matches === true && this.smallQuery.matches === false) {
            this.mode = 'push';
        }
        if (this.mediumQuery.matches === true && this.smallQuery.matches === true) {
            this.mode = 'over';
        }
    }

    ngOnInit() {
        this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
        this.changeBreadcrumb.emitId(this.headerId);
    }

    ngAfterViewInit() {
        this.resizeSubscription = this.resizeService.onResize$
        .subscribe(size => {
            if (size.innerWidth > 768) {
                this.mode = 'side';
            }
            if (size.innerWidth < 768) {
                this.mode = 'push';
            }
            if (size.innerWidth < 481) {
                this.mode = 'over';
            }
        });
    }
    openDialog() {
        this.dialog.open(ThresholdsDialogComponent);
    }

    ngOnDestroy() {
        // tslint:disable-next-line: deprecation
        this.openedQuery.removeListener(this._mobileQueryListener);
        // tslint:disable-next-line: deprecation
        this.mediumQuery.removeListener(this._mobileQueryListener);
        // tslint:disable-next-line: deprecation
        this.smallQuery.removeListener(this._mobileQueryListener);
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
    }
}
