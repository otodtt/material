import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../common/services/changeBreadcrumb.service';

@Component({
    selector: 'prz-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    headerId = 'aa-products';
    breadcrumbTitle = 'ПРОДУКТИ';

    constructor(
        private changeBreadcrumb: ChangeBreadcrumbService,
    ) {}

    ngOnInit() {
        this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
        this.changeBreadcrumb.emitId(this.headerId);
    }

}
