import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import { ChangeBreadcrumbService } from '../../common/services/changeBreadcrumb.service';

@Component({
  templateUrl: './practices.component.html',
  styleUrls: ['./practices.component.scss']
})
export class PracticesComponent implements OnInit {
    headerId = 'aa-practices';
    breadcrumbTitle = 'ДРЗП';

    constructor(private changeBreadcrumb: ChangeBreadcrumbService) { }

    ngOnInit() {
        this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
        this.changeBreadcrumb.emitId(this.headerId);
    }
}
