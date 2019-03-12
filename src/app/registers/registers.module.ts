import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Header and Footer Module */
import { ShareComponentsModule } from '../common/share.components.module';
import { MaterialModule } from '../common/material/material.module';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material';
import { getBulgarianPaginatorIntl } from '../products/shared/services/CustomPaginator';

import { RegistersRoutingModule } from './registers-routing.module';

/** Services */
import { ProductsService } from './shared/products.service';

import { MoreDialogComponent } from './parallel/more-dialog/more-dialog.component';

import { RegistersComponent } from './registers.component';
import { ParallelComponent } from './parallel/parallel.component';

@NgModule({
  imports: [
    CommonModule,
    ShareComponentsModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    RegistersRoutingModule,
  ],
  declarations: [
    RegistersComponent,
    MoreDialogComponent,
    ParallelComponent,
  ],
  providers: [
    ProductsService,
    { provide: MatPaginatorIntl, useValue: getBulgarianPaginatorIntl() }
  ],
  entryComponents: [ MoreDialogComponent ],
})
export class RegistersModule { }
