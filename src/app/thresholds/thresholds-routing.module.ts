import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThresholdsComponent } from './thresholds/thresholds.component';

// Grains
import { TriticumComponent } from './pages/grains/triticum/triticum.component';
import { HordeumComponent } from './pages/grains/hordeum/hordeum.component';
import { ZeaComponent } from './pages/grains/zea/zea.component';

// Beans
import { PhaseolusComponent } from './pages/beans/phaseolus/phaseolus.component';
import { PisumComponent } from './pages/beans/pisum/pisum.component';
import { ViciaComponent } from './pages/beans/vicia/vicia.component';
import { MedicagoComponent } from './pages/beans/medicago/medicago.component';

// Technical
import { BrassicaComponent } from './pages/technical/brassica/brassica.component';
import { HelianthusComponent } from './pages/technical/helianthus/helianthus.component';
import { BetaComponent } from './pages/technical/beta/beta.component';
import { NicotianaComponent } from './pages/technical/nicotiana/nicotiana.component';
import { GossypiumComponent } from './pages/technical/gossypium/gossypium.component';
import { CannabisComponent } from './pages/technical/cannabis/cannabis.component';
import { HumulusComponent } from './pages/technical/humulus/humulus.component';

// Etheric
import { MenthaComponent } from './pages/etheric/mentha/mentha.component';
import { RosaComponent } from './pages/etheric/rosa/rosa.component';


// import {  } from './pages/technical';

export const routes: Routes = [
    { path: '', component: ThresholdsComponent, children: [
        { path: '', redirectTo: '/thresholds/triticum-spp', pathMatch: 'full' },
        { path: 'triticum-spp', component: TriticumComponent },
        { path: 'hordeum-vulgare', component: HordeumComponent},
        { path: 'zea-mays', component: ZeaComponent },
        { path: 'phaseolus-vulgaris', component: PhaseolusComponent },
        { path: 'pisum-sativum', component: PisumComponent },
        { path: 'vicia-villosa', component: ViciaComponent },
        { path: 'medicago-sativa', component: MedicagoComponent },
        { path: 'brassica-napus', component: BrassicaComponent },
        { path: 'helianthus-annuus', component: HelianthusComponent },
        { path: 'beta-vulgaris', component: BetaComponent },
        { path: 'nicotiana-tabacum', component: NicotianaComponent },
        { path: 'gossypium', component: GossypiumComponent },
        { path: 'cannabis-and-linum', component: CannabisComponent },
        { path: 'humulus-lupulus', component: HumulusComponent },
        { path: 'mentha-and-lavandula', component: MenthaComponent },
        { path: 'rosa-damascena', component: RosaComponent },
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ThresholdsRoutingModul {}

