import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../common/services/changeBreadcrumb.service';

@Component({
    // selector: 'prz-products',
    templateUrl: './index.acaricides.component.html',
    // styleUrls: ['./index.acaricides.component.scss']
})
export class IndexAcaricidesComponent implements OnInit {
    headerId = 'aa-products';
    breadcrumbTitle = 'АКАРИЦИДИ';

    constructor(
        private changeBreadcrumb: ChangeBreadcrumbService,
    ) { }

    ngOnInit() {
        this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
        this.changeBreadcrumb.emitId(this.headerId);
    }
}
