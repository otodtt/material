import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../../common/services/changeBreadcrumb.service';

@Component({
  selector: 'prz-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
    // breadcrumbTitle = 'ДРЗП';
    breadcrumbName = 'Правила';

    constructor( private changeBreadcrumb: ChangeBreadcrumbService ) { }

    ngOnInit() {
        // this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
        this.changeBreadcrumb.emitName(this.breadcrumbName);
    }
}
