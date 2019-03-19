import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { CropsRoutingModul } from './crops-routing.module';

/** Header and Footer Module */
import { ShareComponentsModule } from '../common/share.components.module';
import { MaterialModule } from '../common/material/material.module';

/**  Shared */
import { SideMenuComponent } from './side-menu/side-menu.component';

import { CropsComponent } from './crops.component';
import { CropDetailComponent } from './pages/crop-detail/crop-detail.component';
import { CropsPageComponent } from './pages/crops-page/crops-page.component';

/**  Pages */

@NgModule({
    imports: [
        CommonModule,
        ShareComponentsModule,
        MaterialModule,
        CropsRoutingModul,
    ],
    declarations: [
        CropsComponent,
        SideMenuComponent,
        CropDetailComponent,
        CropsPageComponent,
    ]
})
export class CropsModule { }

