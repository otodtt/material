import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';

import { SeoService } from '../../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../../common/services/changeBreadcrumb.service';

import { DialogComponent } from '../../../shared/dialog/dialog.component';

import { Practice } from '../../../shared/models/practice.model';
import { PracticesService } from '../../../shared/services/practices.services';

@Component({
    templateUrl: './beta.component.html',
    styleUrls: ['../../pages.scss']
})
export class BetaComponent implements OnInit, OnDestroy {
    private title = 'ДРЗП - Цвекло';
    private description = 'Добра Растителнозащитна Пракатика при цвекло. Борба с болести, неприятели и плевели при цвекло.';
    private keywords = 'цвекло, болести, неприятели, плевели, ПРЗ, ПИВ';

    breadcrumbName = 'Цвекло';

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
        this.subscription = this.practicesService.getPractices('beta')
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
