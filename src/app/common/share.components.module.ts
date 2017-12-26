import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material/material.module';

import { HeaderComponent } from '../shared/header/header.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
     ],
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ]
})

export class ShareComponentsModule {}
