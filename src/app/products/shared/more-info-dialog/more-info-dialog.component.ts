import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'prz-more-info-dialog',
    templateUrl: './more-info-dialog.component.html',
    styleUrls: ['./more-info-dialog.component.scss']
})
export class MoreInfoDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<MoreInfoDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        console.log(this.data);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
