import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

@Component({
    templateUrl: './hordeum.component.html',
    styleUrls: ['../../pages.scss']
})
export class HordeumComponent implements OnInit {
    private breadcrumbName = 'Ечемик';
    private title = 'ПИВ - Ечемик';
    private description = 'Прагове на икономическа вредност за вредители по ечемик.';
    private keywords = 'ПИВ, ечемик, болести, неприятели, плевели, ПРЗ';


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
