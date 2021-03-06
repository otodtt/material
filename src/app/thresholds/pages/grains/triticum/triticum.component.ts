import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './triticum.component.html',
    styleUrls: ['../../pages.scss']
})
export class TriticumComponent implements OnInit {
    private breadcrumbName = 'Пшеница';
    private title = 'ПИВ - Пшеница';
    private description = 'Прагове на икономическа вредност за вредители по пшеница.';
    private keywords = 'ПИВ, пшеница, болести, неприятели, плевели, ПРЗ';

    constructor(
        private seoService: SeoService,
        private changeBreadcrumbService: ChangeBreadcrumbService,
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
    }

    ngOnInit() {
        this.changeBreadcrumbService.emitName(this.breadcrumbName);
    }

}
