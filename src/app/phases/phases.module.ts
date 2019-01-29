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
import { GlycineComponent } from './pages/beans/glycine/glycine.component';


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
        GlycineComponent
    ]
})
export class PhasesModule { }

