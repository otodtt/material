import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../common/services/changeBreadcrumb.service';
import { SeoService } from '../common/services/SeoService';

@Component({
    selector: 'prz-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    private title = 'ПРЗ | Продуки за растителна защита.';
    private description =   'Продуки за растителна защита (инсектици, фунгициди, хербициди, ' +
                            'акарициди и други). ';
    private keywords = 'продуки, растителна, защита, култури, растителнозащитни, пракатики';

    headerId = 'aa-products';
    breadcrumbTitle = 'ПРОДУКТИ';
    breadcrumbName = 'Продукти';

    constructor(
        private changeBreadcrumb: ChangeBreadcrumbService,
        private seoService: SeoService
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
    }

    ngOnInit() {
        this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
        this.changeBreadcrumb.emitName(this.breadcrumbName);
        this.changeBreadcrumb.emitId(this.headerId);
    }

}
