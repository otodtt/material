import { Component, OnInit } from '@angular/core';
import { ChangeBreadcrumbService } from '../common/services/changeBreadcrumb.service';

@Component({
    selector: 'prz-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
    headerId = 'aa-contacts';
    breadcrumbTitle = 'КОНТАКТИ';
    breadcrumbName = 'Контакти';

    constructor( private changeBreadcrumb: ChangeBreadcrumbService) { }

    ngOnInit() {
        this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
        this.changeBreadcrumb.emitName(this.breadcrumbName);
        this.changeBreadcrumb.emitId(this.headerId);
    }
}
