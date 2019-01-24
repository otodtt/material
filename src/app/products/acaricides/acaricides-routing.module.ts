import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { IndexAcaricidesComponent } from './index.acaricides.component';
import { AcaricidesComponent } from './acaricides.component';
import { AcaricideDetailComponent } from './acaricide-detail/acaricide-detail.component';


export const routes: Routes = [
  {
    path: '', component: IndexAcaricidesComponent, children: [
      { path: '', redirectTo: 'acaricides', pathMatch: 'full' },
      { path: 'acaricides', component: AcaricidesComponent},
      { path: 'acaricides/:id', component: AcaricideDetailComponent},
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AcaricidesRoutingModule { }
