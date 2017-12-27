import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ChangeBreadcrumbService } from '../../common/services/changeBreadcrumb.service';
import { ResizeService } from '../../common/services/ResizeService';

@Component({
  templateUrl: './practices.component.html',
  styleUrls: ['./practices.component.scss']
})
export class PracticesComponent implements OnInit, OnDestroy, AfterViewInit {
    headerId = 'aa-practices';
    breadcrumbTitle = 'ДРЗП';

    mode = 'side';
    opened: boolean;
    size: string;
    mobWidth: any;
    private resizeSubscription: Subscription;

    constructor(
        private changeBreadcrumb: ChangeBreadcrumbService,
        private resizeService: ResizeService
    ) {
        this.resizeSubscription = this.resizeService.onResize$
            // .subscribe(size => console.log(size.innerWidth));
            .subscribe(size => {
                if (size.innerWidth > 768) {
                    // this.size = '< 700';
                    this.opened = true;
                }
                if (size.innerWidth < 768) {
                    // this.size = '< 700';
                    this.opened = false;
                }
                // this.opened = true;
                console.log(this.size);
                // console.log(this.mobWidth);
            });
    }

    ngOnInit() {
        this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
        this.changeBreadcrumb.emitId(this.headerId);
    }

    ngAfterViewInit() {
    }

    ngOnDestroy() {
        if (this.resizeSubscription) {
          this.resizeSubscription.unsubscribe();
        }
    }
}
