import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ChangeBreadcrumbService } from '../common/services/changeBreadcrumb.service';
import { SeoService } from '../common/services/SeoService';

import { Product } from './shared/models/product.model';
import { ProductsService } from './shared/services/products.service';

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
