import { Injectable, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ChangeBreadcrumbService {
    /** Observable string sources */
    private emitBreadcrumbTitle = new Subject<any>();
    private emitBreadcrumbName = new Subject<any>();
    private emitIdName = new Subject<any>();
    private removeClass = new Subject<any>();
    private closeDrawerMenu = new Subject<any>();

    /**  Observable string streams */
    changeTitle$ = this.emitBreadcrumbTitle.asObservable();
    changeName$ = this.emitBreadcrumbName.asObservable();
    changeId$ = this.emitIdName.asObservable();
    changeClass$ = this.removeClass.asObservable();
    closeDrawer$ = this.closeDrawerMenu.asObservable();

    /** Service message commands */
    emitTitle(change: any) {
        this.emitBreadcrumbTitle.next(change);
    }
    emitName(change: any) {
        this.emitBreadcrumbName.next(change);
    }
    emitId(change: any) {
        this.emitIdName.next(change);
    }
    emitClass(change: any) {
        this.removeClass.next(change);
    }
    emitCloseDrawer(change: any) {
        this.closeDrawerMenu.next(change);
    }
}
