import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './brassica.component.html',
    styleUrls: ['./brassica.component.scss', '../../pages.scss']
})
export class BrassicaComponent implements OnInit {

    private title = 'BBCH - Рапица';
    private description = 'Фенологични фази на растеж и BBCH-ключове за тяхната идентификация при рапица.';
    breadcrumbName = 'Рапица';

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
