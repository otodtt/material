import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import { SeoService } from '../../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../../common/services/changeBreadcrumb.service';

import { DialogComponent } from '../../../shared/dialog/dialog.component';

import { Practice } from '../../../shared/models/practice.model';
import { PracticesService } from '../../../shared/services/practices.services';

@Component({
  templateUrl: './triticum.component.html',
  styleUrls: ['../../pages.scss']
})
export class TriticumComponent implements OnInit {
    private title = 'ДРЗП - Пшеница';
    private description = 'Добра Растителнозащитна Пракатика при пшеница. Борба с болести, неприятели и плевели при пшеницата';
    private keywords = 'пшеница, болести, неприятели, плевели, ПРЗ, ПИВ';

    breadcrumbName = 'Пшеница';

    practices: Practice[] = [];

    showHide: number;
    panelOpenState = 'test';

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
        // this.practicesService.getCategories()
        // .subscribe((practices: Practice[]) => {
        //     this.practices = practices;
        //     console.log(this.practices);
        //     // this.isLoaded = true;
        // });
        this.practicesService.getPractices('practices')
        .subscribe((practices: Practice[]) => {
            this.practices = practices;
            console.log(this.practices);
            // this.isLoaded = true;
        });
    }

    openDialog() {
        this.dialog.open(DialogComponent, {
            data: { test: this.panelOpenState }
        });
    }
    pivShowHide(index) {

    }
}
