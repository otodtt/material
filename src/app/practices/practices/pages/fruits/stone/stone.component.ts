import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import { SeoService } from '../../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../../common/services/changeBreadcrumb.service';

import { DialogComponent } from '../../../shared/dialog/dialog.component';

import { Practice } from '../../../shared/models/practice.model';
import { PracticesService } from '../../../shared/services/practices.services';

@Component({
    templateUrl: './stone.component.html',
    styleUrls: ['../../pages.scss']
})
export class StoneComponent implements OnInit, OnDestroy {

    private title = 'ДРЗП - Костилкови овощни видове';
    private description =   'Добра Растителнозащитна Пракатика при слива, череша, вишна, праскова и кайсия. ' +
                            'Добра Растителнозащитна Пракатика при костилкови овощни видове. ' +
                            ' Борба с болести, неприятели и плевели при слива, череша, вишна, праскова и кайсия.';
    private keywords = 'слива, череша, вишна, праскова и кайсия, болести, неприятели, плевели, ПРЗ, ПИВ';

    breadcrumbName = 'Костилкови';

    isLoaded = false;
    practices: Practice[] = [];
    subscription: Subscription;

    constructor(
        private seoService: SeoService,
        private changeBreadcrumbService: ChangeBreadcrumbService,
        public dialog: MatDialog,
        private practicesService: PracticesService
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
    }

    ngOnInit() {
        this.changeBreadcrumbService.emitName(this.breadcrumbName);
        this.subscription = this.practicesService.getPractices('stone')
            .subscribe((practices: Practice[]) => {
                this.practices = practices;
                this.isLoaded = true;
            });
    }

    openDialog(table: string) {
        this.dialog.open(DialogComponent, {
            data: { table: table}
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
          this.subscription.unsubscribe();
        }
    }
}
