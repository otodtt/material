import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'prz-more-info-dialog',
    templateUrl: './more-info-dialog.component.html',
    styleUrls: ['./more-info-dialog.component.scss']
})
export class MoreInfoDialogComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        console.log(this.data);
    }

    ngOnInit() {
        console.log(this.data);
    }

}
