import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


/** Routing */
import { ProductsRoutingModule } from './products-routing.module';

/** Services */
import { ProductsService } from './shared/services/products.service';
import { ResizeService } from '../common/services/ResizeService';

/** Header and Footer Module */
import { ShareComponentsModule } from '../common/share.components.module';
import { MaterialModule } from '../common/material/material.module';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';

import { getBulgarianPaginatorIntl } from './shared/services/CustomPaginator';

import { ProductsComponent } from './products.component';
import { MoreInfoDialogComponent } from './shared/more-info-dialog/more-info-dialog.component';
import { InsecticidesComponent } from './insecticides/insecticides.component';
import { AcaricidesComponent } from './acaricides/acaricides.component';
import { AcaricideDetailComponent } from './acaricides/acaricide-detail/acaricide-detail.component';
import { NematocidesComponent } from './nematocides/nematocides.component';
import { NematocideDetailComponent } from './nematocides/nematocide-detail/nematocide-detail.component';
import { RodentsComponent } from './rodents/rodents.component';
import { RodentsDialogComponent } from './rodents/rodents-dialog/rodents-dialog.component';
import { LimatsidesComponent } from './limatsides/limatsides.component';
import { LimatsideDetailComponent } from './limatsides/limatside-detail/limatside-detail.component';
import { RepellentsComponent } from './repellents/repellents.component';
import { PheromonesComponent } from './pheromones/pheromones.component';
import { PheromonesDetailComponent } from './pheromones/pheromones-detail/pheromones-detail.component';
import { DesiccantsComponent } from './desiccants/desiccants.component';
import { DesiccantsDetailComponent } from './desiccants/desiccants-detail/desiccants-detail.component';
import { RegulatorsComponent } from './regulators/regulators.component';
import { RegulatorDetailComponent } from './regulators/regulator-detail/regulator-detail.component';
import { FungicidesComponent } from './fungicides/fungicides.component';
import { HerbicidesComponent } from './herbicides/herbicides.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ProductsRoutingModule,
    ShareComponentsModule,
    MaterialModule,
    MatPaginatorModule,
    MatTableModule
  ],
  declarations: [
    ProductsComponent,
    MoreInfoDialogComponent,
    RodentsDialogComponent,
    InsecticidesComponent,
    AcaricidesComponent,
    AcaricideDetailComponent,
    NematocidesComponent,
    NematocideDetailComponent,
    RodentsComponent,
    LimatsidesComponent,
    LimatsideDetailComponent,
    RepellentsComponent,
    PheromonesComponent,
    PheromonesDetailComponent,
    DesiccantsComponent,
    DesiccantsDetailComponent,
    RegulatorsComponent,
    RegulatorDetailComponent,
    FungicidesComponent,
    HerbicidesComponent,
  ],
  providers: [
    ProductsService,
    ResizeService,
    { provide: MatPaginatorIntl, useValue: getBulgarianPaginatorIntl() }
  ],
  entryComponents: [MoreInfoDialogComponent, RodentsDialogComponent],
})
export class ProductsModule { }
