import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { AcaricidesRoutingModule } from './acaricides-routing.module';

/** Services */
import { ProductsService } from '../shared/services/products.service';

/** Header and Footer Module */
import { ShareComponentsModule } from '../../common/share.components.module';
import { MaterialModule } from '../../common/material/material.module';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material';
import { getBulgarianPaginatorIntl } from '../shared/services/CustomPaginator';

import { IndexAcaricidesComponent } from './index.acaricides.component';
import { AcaricidesComponent } from './acaricides.component';
import { MoreInfoDialogComponent } from '../shared/more-info-dialog/more-info-dialog.component';
import { AcaricideDetailComponent } from '../acaricides/acaricide-detail/acaricide-detail.component';

@NgModule({
    imports: [
        CommonModule,
        AcaricidesRoutingModule,
        ShareComponentsModule,
        MaterialModule,
        MatPaginatorModule,
        MatTableModule
    ],
    declarations: [
        AcaricidesComponent,
        IndexAcaricidesComponent,
        MoreInfoDialogComponent,
        AcaricideDetailComponent
    ],
    providers: [
        ProductsService,
        { provide: MatPaginatorIntl, useValue: getBulgarianPaginatorIntl() }
    ],
    entryComponents: [MoreInfoDialogComponent],
})
export class AcaricidesModule { }
