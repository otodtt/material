import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProductsComponent } from './products.component';
import { AcaricidesComponent } from './pages/acaricides/acaricides.component';
import { AcaricideDetailComponent } from './pages/acaricides/acaricide-detail/acaricide-detail.component';
import { InsecticidesComponent } from './pages/insecticides/insecticides.component';


export const routes: Routes = [
    { path: '', component: ProductsComponent, children: [
        { path: '', redirectTo: '/products/acaricides', pathMatch: 'full' },
        { path: 'acaricides', component: AcaricidesComponent},
        { path: 'acaricides/:id', component: AcaricideDetailComponent},
        { path: 'insecticides', component: InsecticidesComponent},
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
