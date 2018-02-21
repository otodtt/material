import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { ThresholdsRoutingModul } from './thresholds-routing.module';

// Header and Footer Module
import { ShareComponentsModule } from '../common/share.components.module';
import { MaterialModule } from '../common/material/material.module';

// Shared
import { SideMenuComponent } from './side-menu/side-menu.component';

import { ThresholdsComponent } from './thresholds/thresholds.component';
import { TriticumComponent } from './pages/grains/triticum/triticum.component';

@NgModule({
    imports: [
        CommonModule,
        ThresholdsRoutingModul,
        ShareComponentsModule,
        MaterialModule
    ],
    declarations: [
        ThresholdsComponent,
        SideMenuComponent,
        TriticumComponent
    ]
})
export class ThresholdsModule { }
