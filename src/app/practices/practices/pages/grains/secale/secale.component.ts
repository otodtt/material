import { Component, OnInit, ViewChild, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { SeoService } from '../../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../../common/services/changeBreadcrumb.service';

import { DialogComponent } from '../../../shared/dialog/dialog.component';

import { Practice } from '../../../shared/models/practice.model';
import { PracticesService } from '../../../shared/services/practices.services';

@Component({
    templateUrl: './secale.component.html',
    styleUrls: ['../../pages.scss']
})
export class SecaleComponent implements OnInit, OnDestroy {
    private breadcrumbName = 'Ръж';

    isLoaded = false;
    practices: Practice[] = [];
    subscription: Subscription;

    private title = 'ДРЗП - Ръж';
    private description = 'Добра Растителнозащитна Пракатика при ръж. Борба с болести, неприятели и плевели при ръж.';
    private keywords = 'ръж, болести, неприятели, плевели, ПРЗ, ПИВ';

    @ViewChild('structure') public structure: ElementRef;

    @HostListener('click', ['$event'])
    onClick($event: MouseEvent) {
        const el = $event.target as HTMLInputElement;
        if (el.getAttribute('target') === '#table_bbch') {
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
        this.subscription = this.practicesService.getPractices('secale')
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
