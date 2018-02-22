import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { ThresholdsRoutingModul } from './thresholds-routing.module';

// Header and Footer Module
import { ShareComponentsModule } from '../common/share.components.module';
import { MaterialModule } from '../common/material/material.module';

// Shared
import { SideMenuComponent } from './side-menu/side-menu.component';

import { ThresholdsComponent } from './thresholds/thresholds.component';
import { TriticumComponent } from './pages/grains/triticum/triticum.component';
import { HordeumComponent } from './pages/grains/hordeum/hordeum.component';
import { ZeaComponent } from './pages/grains/zea/zea.component';
import { PhaseolusComponent } from './pages/beans/phaseolus/phaseolus.component';
import { PisumComponent } from './pages/beans/pisum/pisum.component';
import { ViciaComponent } from './pages/beans/vicia/vicia.component';
import { MedicagoComponent } from './pages/beans/medicago/medicago.component';
import { BrassicaComponent } from './pages/technical/brassica/brassica.component';
import { HelianthusComponent } from './pages/technical/helianthus/helianthus.component';
import { BetaComponent } from './pages/technical/beta/beta.component';
import { NicotianaComponent } from './pages/technical/nicotiana/nicotiana.component';
import { GossypiumComponent } from './pages/technical/gossypium/gossypium.component';
import { CannabisComponent } from './pages/technical/cannabis/cannabis.component';
import { HumulusComponent } from './pages/technical/humulus/humulus.component';
import { MenthaComponent } from './pages/etheric/mentha/mentha.component';
import { RosaComponent } from './pages/etheric/rosa/rosa.component';

@NgModule({
    imports: [
        CommonModule,
        ThresholdsRoutingModul,
        ShareComponentsModule,
        MaterialModule
    ],
    declarations: [
        ThresholdsComponent,
        SideMenuComponent,
        TriticumComponent,
        HordeumComponent,
        ZeaComponent,
        PhaseolusComponent,
        PisumComponent,
        ViciaComponent,
        MedicagoComponent,
        BrassicaComponent,
        HelianthusComponent,
        BetaComponent,
        NicotianaComponent,
        GossypiumComponent,
        CannabisComponent,
        HumulusComponent,
        MenthaComponent,
        RosaComponent
    ]
})
export class ThresholdsModule { }
