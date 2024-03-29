import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './citrullus.component.html',
    styleUrls: ['../../pages.scss']
})
export class CitrullusComponent implements OnInit {
    private title = 'ПИВ - Пъпеши и Дини';
    private description = 'Прагове на икономическа вредност за вредители по пъпеши и дини.';
    private keywords = 'ПИВ, пъпеши, дини, болести, неприятели, плевели, ПРЗ';

    private breadcrumbName = 'Пъпеши и Дини';

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
