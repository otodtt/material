import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './fragaria.component.html',
    styleUrls: ['../pages.scss']
})
export class FragariaComponent implements OnInit {
    private breadcrumbName = 'Ягоди и Малини';
    private title = 'ПИВ - Ягоди и Малини';
    private description = 'Прагове на икономическа вредност за вредители по ягоди и малини.';
    private keywords = 'ПИВ, ягоди, малини, болести, неприятели, плевели, ПРЗ';

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
