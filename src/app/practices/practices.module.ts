import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Routing
import { PracticesRoutingModul } from './practices-routing.module';

// Header and Footer Module
import { ShareComponentsModule } from '../common/share.components.module';
import { MaterialModule } from '../common/material/material.module';

// Practices
import { PracticesComponent } from './practices/practices.component';
import { SideMenuComponent } from './practices/side-menu/side-menu.component';
import { IntroductionComponent } from './practices/introduction/introduction.component';

// Management
import { ManagementComponent } from './management/management/management.component';

@NgModule({
  imports: [
    CommonModule,
    PracticesRoutingModul,
    ShareComponentsModule,
    MaterialModule
  ],
  declarations: [
    PracticesComponent,
    IntroductionComponent,
    SideMenuComponent,
    ManagementComponent,
  ],
  entryComponents: [SideMenuComponent],
})
export class PracticesModule { }
