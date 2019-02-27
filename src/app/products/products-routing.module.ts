import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProductsComponent } from './products.component';
import { AcaricidesComponent } from './acaricides/acaricides.component';
import { AcaricideDetailComponent } from './acaricides/acaricide-detail/acaricide-detail.component';
import { InsecticidesComponent } from './insecticides/insecticides.component';
import { ParallelComponent } from './parallel/parallel.component';
import { NematocidesComponent } from './nematocides/nematocides.component';
import { NematocideDetailComponent } from './nematocides/nematocide-detail/nematocide-detail.component';
import { RodentsComponent } from './rodents/rodents.component';
import { RepellentsComponent } from './repellents/repellents.component';

export const routes: Routes = [
  { path: '', component: ProductsComponent, children: [
    { path: '', redirectTo: '/acaricides', pathMatch: 'full' },
    { path: 'insecticides', component: InsecticidesComponent },
    { path: 'acaricides', component: AcaricidesComponent},
    { path: 'acaricides/:id', component: AcaricideDetailComponent},
    { path: 'nematocides', component: NematocidesComponent },
    { path: 'nematocides/:id', component: NematocideDetailComponent },
    { path: 'rodenticides', component: RodentsComponent },
    { path: 'repellents', component: RepellentsComponent },
    { path: 'parallel-trade', component: ParallelComponent },
  ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
