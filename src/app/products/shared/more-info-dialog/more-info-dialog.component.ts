import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { Router } from '@angular/router';

@Component({
    selector: 'prz-more-info-dialog',
    templateUrl: './more-info-dialog.component.html',
    styleUrls: ['./more-info-dialog.component.scss']
})
export class MoreInfoDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<MoreInfoDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private router: Router
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    onClickNavigate(id: string) {
        this.dialogRef.close();
        this.router.navigate(['acaricides/' + id]);
    }
}
