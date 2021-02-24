import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './vicia.component.html',
    styleUrls: ['../../pages.scss']
})
export class ViciaComponent implements OnInit {
    private breadcrumbName = 'Фий';
    private title = 'ПИВ - Фий';
    private description = 'Прагове на икономическа вредност за вредители по фий.';
    private keywords = 'ПИВ, фий, болести, неприятели, плевели, ПРЗ';


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
