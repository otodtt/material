import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThresholdsComponent } from './thresholds/thresholds.component';

// Grains
import { TriticumComponent } from './pages/grains/triticum/triticum.component';
import { HordeumComponent } from './pages/grains/hordeum/hordeum.component';
import { ZeaComponent } from './pages/grains/zea/zea.component';

export const routes: Routes = [
    { path: '', component: ThresholdsComponent, children: [
        { path: '', redirectTo: '/thresholds/triticum-spp', pathMatch: 'full' },
        { path: 'triticum-spp', component: TriticumComponent },
        { path: 'hordeum-vulgare', component: HordeumComponent},
        { path: 'zea-mays', component: ZeaComponent},
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ThresholdsRoutingModul {}

