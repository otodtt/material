import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './humulus.component.html',
    styleUrls: ['./humulus.component.scss', '../../pages.scss']
})
export class HumulusComponent implements OnInit {

    private title = 'BBCH - Хмел';
    private description = 'Фенологични фази на растеж и BBCH-ключове за тяхната идентификация при хмел.';
    private breadcrumbName = 'Хмел';

    constructor(
        private seoService: SeoService,
        private changeBreadcrumb: ChangeBreadcrumbService,
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setNoKeywordsMeta(this.description);
    }

    ngOnInit() {
        this.changeBreadcrumb.emitName(this.breadcrumbName);
    }
}
