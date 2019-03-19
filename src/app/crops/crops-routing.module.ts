import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropsComponent } from './crops.component';
import { CropDetailComponent } from './pages/crop-detail/crop-detail.component';
import { CropsPageComponent } from './pages/crops-page/crops-page.component';

export const routes: Routes = [
    {
        path: '', component: CropsComponent, children: [
            { path: '', redirectTo: '/crops/all', pathMatch: 'full' },
            { path: 'all', component: CropsPageComponent },
            { path: 'show/:id', component: CropDetailComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CropsRoutingModul { }
