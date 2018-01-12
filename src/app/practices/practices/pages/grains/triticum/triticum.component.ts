import { Component, OnInit, ViewChild, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import { SeoService } from '../../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../../common/services/changeBreadcrumb.service';

import { DialogComponent } from '../../../shared/dialog/dialog.component';

import { Practice } from '../../../shared/models/practice.model';
import { PracticesService } from '../../../shared/services/practices.services';


@Component({
    templateUrl: './triticum.component.html',
    styleUrls: ['../../pages.scss']
})
export class TriticumComponent implements OnInit, OnDestroy {
    private title = 'ДРЗП - Пшеница';
    private description = 'Добра Растителнозащитна Пракатика при пшеница. Борба с болести, неприятели и плевели при пшеницата.';
    private keywords = 'пшеница, болести, неприятели, плевели, ПРЗ, ПИВ';

    breadcrumbName = 'Пшеница';

    isLoaded = false;
    practices: Practice[] = [];
    subscription: Subscription;


    @ViewChild('structure') public structure: ElementRef;

    @HostListener('click', ['$event'])
    onClick($event: MouseEvent) {
        if (event.srcElement.getAttribute('target') === '#table_bbch') {
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
        this.subscription = this.practicesService.getPractices('triticum')
            .subscribe((practices: Practice[]) => {
                this.practices = practices;
                this.isLoaded = true;
                console.log(this.practices);
            });
    }

    openDialog(table: string) {
        this.dialog.open(DialogComponent, {
            data: { table: table}
        });
    }

    doScroll(): void {
        // this.structure.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
        this.structure.nativeElement.scrollIntoView();
    }

    ngOnDestroy() {
        if (this.subscription) {
          this.subscription.unsubscribe();
        }
    }
}
