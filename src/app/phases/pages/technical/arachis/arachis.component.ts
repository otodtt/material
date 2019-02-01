import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './arachis.component.html',
    styleUrls: ['./arachis.component.scss', '../../pages.scss']
})
export class ArachisComponent implements OnInit {

    private title = 'BBCH - Фъстъци';
    private description = 'Фенологични фази на растеж и BBCH-ключове за тяхната идентификация при фъстъци.';
    breadcrumbName = 'Фъстъци';

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
