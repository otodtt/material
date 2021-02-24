import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../../common/services/SeoService';

@Component({
    templateUrl: './oryza.component.html',
    styleUrls: ['./oryza.component.scss', '../../pages.scss']
})
export class OryzaComponent implements OnInit {

    private title = 'BBCH - Ориз';
    private description = 'Фенологични фази на растеж и BBCH-ключове за тяхната идентификация при ориз.';
    private breadcrumbName = 'Ориз';

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
