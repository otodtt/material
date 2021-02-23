import { Component, OnInit, ViewChild, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { SeoService } from '../../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../../common/services/changeBreadcrumb.service';

import { DialogComponent } from '../../../shared/dialog/dialog.component';

import { Practice } from '../../../shared/models/practice.model';
import { PracticesService } from '../../../shared/services/practices.services';

@Component({
    templateUrl: './seed.component.html',
    styleUrls: ['../../pages.scss', './seed.component.scss']
})
export class SeedComponent implements OnInit, OnDestroy {

    private title = 'ДРЗП - Семкови овощни видове';
    private description = 'Добра Растителнозащитна Пракатика при ябълка, круша и дюля. ' +
        'Добра Растителнозащитна Пракатика при Семкови овощни видове. ' +
        ' Борба с болести, неприятели и плевели при ябълка, круша и дюля.';
    private keywords = 'ябълка, круша, дюля, болести, неприятели, плевели, ПРЗ, ПИВ';

    breadcrumbName = 'Семкови';

    isLoaded = false;
    practices: Practice[] = [];
    subscription: Subscription;

    @ViewChild('structure') public structure: ElementRef;

    @HostListener('click', ['$event'])
    onClick($event: MouseEvent) {
        // tslint:disable-next-line: deprecation
        if (event.srcElement.getAttribute('target') === '#table_mils') {
            this.doScroll();
        }
    }

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
        this.subscription = this.practicesService.getPractices('seed')
            .subscribe((practices: Practice[]) => {
                this.practices = practices;
                this.isLoaded = true;
            });
    }

    openDialog(table: string) {
        this.dialog.open(DialogComponent, {
            data: { table: table }
        });
    }

    doScroll(): void {
        this.structure.nativeElement.scrollIntoView();
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
