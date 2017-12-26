import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../common/services/changeBreadcrumb.service';

@Component({
    selector: 'prz-crops',
    templateUrl: './crops.component.html',
    styleUrls: ['./crops.component.scss']
})
export class CropsComponent implements OnInit {
    headerId = 'aa-crops';
    breadcrumbTitle = 'КУЛТУРИ';
    breadcrumbName = 'Култури';

    constructor(private changeBreadcrumb: ChangeBreadcrumbService) { }

    ngOnInit() {
        this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
        this.changeBreadcrumb.emitName(this.breadcrumbName);
        this.changeBreadcrumb.emitId(this.headerId);
    }

}
