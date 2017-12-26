import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticesComponent } from './practices/practices.component';
import { IntroductionComponent } from './practices/introduction/introduction.component';

// Management
import { ManagementComponent } from './management/management/management.component';

export const routes: Routes = [
    { path: '', component: PracticesComponent, children: [
        { path: '', redirectTo: '/practices/introduction', pathMatch: 'full' },
        { path: 'introduction', component: IntroductionComponent },
    ]},
    { path: 'management', component: ManagementComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PracticesRoutingModul {}


// // Grains
// import { TriticumComponent } from './pages/grains/triticum/triticum.component';
// import { HordeumComponent } from './pages/grains/hordeum/hordeum.component';
// import { AvenaComponent } from './pages/grains/avena/avena.component';
// import { SecaleComponent } from './pages/grains/secale/secale.component';
// import { ZeaComponent } from './pages/grains/zea/zea.component';
// import { RodentiaComponent } from './pages/grains/rodentia/rodentia.component';
// // Beans
// import { PhaseolusComponent } from './pages/beans/phaseolus/phaseolus.component';
// import { GlycineComponent } from './pages/beans/glycine/glycine.component';
// import { PisumComponent } from './pages/beans/pisum/pisum.component';
// import { LensComponent } from './pages/beans/lens/lens.component';
// import { CicerComponent } from './pages/beans/cicer/cicer.component';
// import { MedicagoComponent } from './pages/beans/medicago/medicago.component';
// // Technical
// import { NicotianaComponent } from './pages/technical/nicotiana/nicotiana.component';
// import { BetaComponent } from './pages/technical/beta/beta.component';
// import { GossypiumComponent } from './pages/technical/gossypium/gossypium.component';
// import { HelianthusComponent } from './pages/technical/helianthus/helianthus.component';
// import { BrassicaComponent } from './pages/technical/brassica/brassica.component';
// import { ArachisComponent } from './pages/technical/arachis/arachis.component';


        // { path: 'triticum-spp', component: TriticumComponent},
        // { path: 'hordeum-vulgare', component: HordeumComponent},
        // { path: 'avena-sativa', component: AvenaComponent},
        // { path: 'secale-cereale', component: SecaleComponent},
        // { path: 'zea-mays', component: ZeaComponent},
        // { path: 'rodentia', component: RodentiaComponent},
        // { path: 'phaseolus-vulgaris', component: PhaseolusComponent},
        // { path: 'glycine-max', component: GlycineComponent},
        // { path: 'pisum-sativum', component: PisumComponent},
        // { path: 'lens-culinaris', component: LensComponent},
        // { path: 'cicer-arietinum', component: CicerComponent},
        // { path: 'medicago-sativa', component: MedicagoComponent},
        // { path: 'nicotiana-tabacum', component: NicotianaComponent},
        // { path: 'beta-vulgaris', component: BetaComponent},
        // { path: 'gossypium', component: GossypiumComponent},
        // { path: 'helianthus-annuus', component: HelianthusComponent},
        // { path: 'brassica-napus', component: BrassicaComponent},
        // { path: 'arachis-hypogaea', component: ArachisComponent},
