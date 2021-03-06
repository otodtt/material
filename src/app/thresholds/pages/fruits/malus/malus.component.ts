import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './malus.component.html',
    styleUrls: ['../../pages.scss']
})
export class MalusComponent implements OnInit {
    private breadcrumbName = 'Ябълка и Круша';
    private title = 'ПИВ - Ябълка и Круша';
    private description = 'Прагове на икономическа вредност за вредители по ябълка и круша.';
    private keywords = 'ПИВ, ябълка, круша, болести, неприятели, плевели, ПРЗ';

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
