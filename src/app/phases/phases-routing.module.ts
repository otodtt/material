import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhasesComponent } from './phases.component';

/** Grains */
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { GrainsComponent } from './pages/grains/grains/grains.component';
import { ZeaComponent } from './pages/grains/zea/zea.component';
import { OryzaComponent } from './pages/grains/oryza/oryza.component';

/** Beans */
import { PhaseolusComponent } from './pages/beans/phaseolus/phaseolus.component';
import { ViciaComponent } from './pages/beans/vicia/vicia.component';
import { PisumComponent } from './pages/beans/pisum/pisum.component';
import { GlycineComponent } from './pages/beans/glycine/glycine.component';

// // Technical

// // Etheric

// // Vegetables

// // Fruits

// // Fragaria and Vitis

export const routes: Routes = [
    { path: '', component: PhasesComponent, children: [
        { path: '', redirectTo: '/phases/introduction', pathMatch: 'full' },
        { path: 'introduction', component: IntroductionComponent },
        { path: 'grains', component: GrainsComponent},
        { path: 'zea-mays', component: ZeaComponent },
        { path: 'oryza-sativa', component: OryzaComponent },
        { path: 'phaseolus-vulgaris', component: PhaseolusComponent },
        { path: 'vicia-faba', component: ViciaComponent },
        { path: 'pisum-sativum', component: PisumComponent },
        { path: 'glycine-max', component: GlycineComponent },
        // { path: 'brassica-napus', component: BrassicaComponent },
        // { path: 'helianthus-annuus', component: HelianthusComponent },
        // { path: 'beta-vulgaris', component: BetaComponent },
        // { path: 'nicotiana-tabacum', component: NicotianaComponent },
        // { path: 'gossypium', component: GossypiumComponent },
        // { path: 'cannabis-and-linum', component: CannabisComponent },
        // { path: 'humulus-lupulus', component: HumulusComponent },
        // { path: 'mentha-and-lavandula', component: MenthaComponent },
        // { path: 'rosa-damascena', component: RosaComponent },
        // { path: 'solanum-lycopersicum', component: LycopersicumComponent },
        // { path: 'capsicum-annuum', component: CapsicumComponent },
        // { path: 'solanum-melongena', component: MelongenaComponent },
        // { path: 'cucumis-sativus', component: CucumisComponent },
        // { path: 'cucumis-and-citrullus', component: CitrullusComponent },
        // { path: 'allium', component: AlliumComponent },
        // { path: 'brassica-oleracea', component: OleraceaComponent },
        // { path: 'daucus-carota', component: DaucusComponent },
        // { path: 'solanum-tuberosum', component: SolanumComponent },
        // { path: 'malus-and-pyrus', component: MalusComponent },
        // { path: 'prunus-and-cerasus', component: CerasusComponent },
        // { path: 'prunus-persica', component: PersicaComponent },
        // { path: 'prunus-domestica', component: PrunusComponent },
        // { path: 'fragaria-and-rubus', component: FragariaComponent },
        // { path: 'vitis-vinifera', component: VitisComponent },
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PhasesRoutingModul {}

