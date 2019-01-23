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
        IntroductionComponent
    ]
})
export class PhasesModule { }

