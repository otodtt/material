import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../common/services/changeBreadcrumb.service';

@Component({
  selector: 'prz-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
    headerId = 'aa-management';
    breadcrumbTitle = 'ИУВ';
    breadcrumbName = 'Увод';

    constructor( private changeBreadcrumb: ChangeBreadcrumbService ) { }

    ngOnInit() {
        this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
        this.changeBreadcrumb.emitName(this.breadcrumbName);
        this.changeBreadcrumb.emitId(this.headerId);
    }
}
