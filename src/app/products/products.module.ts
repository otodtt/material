import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { ProductsRoutingModule } from './products-routing.module';

/** Services */
import { ProductsService } from './shared/services/products.service';

/** Header and Footer Module */
import { ShareComponentsModule } from '../common/share.components.module';
import { MaterialModule } from '../common/material/material.module';

import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material';
import { getBulgarianPaginatorIntl } from './shared/services/CustomPaginator';

import { AcaricidesComponent } from './pages/acaricides/acaricides.component';
import { InsecticidesComponent } from './pages/insecticides/insecticides.component';
import { MoreInfoDialogComponent } from './shared/more-info-dialog/more-info-dialog.component';
import { AcaricideDetailComponent } from './pages/acaricides/acaricide-detail/acaricide-detail.component';

@NgModule({
    imports: [
        CommonModule,
        ProductsRoutingModule,
        ShareComponentsModule,
        MaterialModule,
        MatPaginatorModule,
        MatTableModule
    ],
    declarations: [
        AcaricidesComponent,
        InsecticidesComponent,
        MoreInfoDialogComponent,
        AcaricideDetailComponent
    ],
    providers: [
        ProductsRoutingModule,
        ProductsService,
        { provide: MatPaginatorIntl, useValue: getBulgarianPaginatorIntl() }
    ],
    entryComponents: [MoreInfoDialogComponent],
})
export class ProductsModule { }
