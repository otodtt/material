import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { CropsRoutingModul } from './crops-routing.module';

/** Header and Footer Module */
import { ShareComponentsModule } from '../common/share.components.module';
import { ResizeService } from '../common/services/ResizeService';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

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
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatCardModule,
        MatDialogModule,
        MatButtonModule,
        MatExpansionModule
    ],
    declarations: [
        CropsComponent,
        SideMenuComponent,
        CropDetailComponent,
        CropsPageComponent,
    ],
    providers: [ ResizeService ]
})
export class CropsModule { }

