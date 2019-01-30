import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { PhasesRoutingModul } from './phases-routing.module';

/** Header and Footer Module */
import { ShareComponentsModule } from '../common/share.components.module';
import { MaterialModule } from '../common/material/material.module';

/**  Shared */
import { SideMenuComponent } from './side-menu/side-menu.component';

import { PhasesComponent } from './phases.component';

/**  Pages */
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { GrainsComponent } from './pages/grains/grains/grains.component';
import { ZeaComponent } from './pages/grains/zea/zea.component';
import { OryzaComponent } from './pages/grains/oryza/oryza.component';
import { PhaseolusComponent } from './pages/beans/phaseolus/phaseolus.component';
import { ViciaComponent } from './pages/beans/vicia/vicia.component';
import { PisumComponent } from './pages/beans/pisum/pisum.component';
import { ArachisComponent } from './pages/beans/arachis/arachis.component';
import { GlycineComponent } from './pages/beans/glycine/glycine.component';
import { HelianthusComponent } from './pages/technical/helianthus/helianthus.component';
import { BrassicaComponent } from './pages/technical/brassica/brassica.component';
import { BetaComponent } from './pages/technical/beta/beta.component';
import { GossypiumComponent } from './pages/technical/gossypium/gossypium.component';
import { HumulusComponent } from './pages/technical/humulus/humulus.component';

@NgModule({
    imports: [
        CommonModule,
        ShareComponentsModule,
        MaterialModule,
        PhasesRoutingModul
    ],
    declarations: [
        PhasesComponent,
        SideMenuComponent,
        IntroductionComponent,
        GrainsComponent,
        ZeaComponent,
        OryzaComponent,
        PhaseolusComponent,
        ViciaComponent,
        PisumComponent,
        GlycineComponent,
        HelianthusComponent,
        BrassicaComponent,
        ArachisComponent,
        BetaComponent,
        GossypiumComponent,
        HumulusComponent
    ]
})
export class PhasesModule { }

