import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { CropsRoutingModul } from './crops-routing.module';

/** Header and Footer Module */
import { ShareComponentsModule } from '../common/share.components.module';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';

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
        CropsRoutingModul,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule
    ],
    declarations: [
        CropsComponent,
        SideMenuComponent,
        CropDetailComponent,
        CropsPageComponent,
    ]
})
export class CropsModule { }

