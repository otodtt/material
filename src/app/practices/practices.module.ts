import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadModule } from '@greg-md/ng-lazy-load';


// Routing
import { PracticesRoutingModul } from './practices-routing.module';

// Services
import { PracticesService } from './practices/shared/services/practices.services';

// Directives and Pipes
import { AnchorToDirective } from '../common/directives/AnchorToDirective';
// import { SanitizeHtmlPipe } from './practices/shared/pipes/keep-html.pipe';

// Header and Footer Module
import { ShareComponentsModule } from '../common/share.components.module';
import { MaterialModule } from '../common/material/material.module';

// Shared
import { DialogComponent } from './practices/shared/dialog/dialog.component';

// Practices
import { PracticesComponent } from './practices/practices.component';
import { SideMenuComponent } from './practices/side-menu/side-menu.component';
import { IntroductionComponent } from './practices/introduction/introduction.component';
import { TriticumComponent } from './practices/pages/grains/triticum/triticum.component';
import { HordeumComponent } from './practices/pages/grains/hordeum/hordeum.component';
import { AvenaComponent } from './practices/pages/grains/avena/avena.component';
import { SecaleComponent } from './practices/pages/grains/secale/secale.component';
import { ZeaComponent } from './practices/pages/grains/zea/zea.component';
import { RodentiaComponent } from './practices/pages/grains/rodentia/rodentia.component';
import { PhaseolusComponent } from './practices/pages/beans/phaseolus/phaseolus.component';
import { CicerComponent } from './practices/pages/beans/cicer/cicer.component';
import { GlycineComponent } from './practices/pages/beans/glycine/glycine.component';
import { LensComponent } from './practices/pages/beans/lens/lens.component';
import { MedicagoComponent } from './practices/pages/beans/medicago/medicago.component';
import { PisumComponent } from './practices/pages/beans/pisum/pisum.component';
import { ArachisComponent } from './practices/pages/technical/arachis/arachis.component';
import { BetaComponent } from './practices/pages/technical/beta/beta.component';
import { BrassicaComponent } from './practices/pages/technical/brassica/brassica.component';
import { GossypiumComponent } from './practices/pages/technical/gossypium/gossypium.component';
import { HelianthusComponent } from './practices/pages/technical/helianthus/helianthus.component';
import { NicotianaComponent } from './practices/pages/technical/nicotiana/nicotiana.component';
import { VegetablesComponent } from './practices/pages/vegetables/vegetables/vegetables.component';
import { PotatoesComponent } from './practices/pages/vegetables/potatoes/potatoes.component';
import { OnionComponent } from './practices/pages/vegetables/onion/onion.component';
import { CabbageComponent } from './practices/pages/vegetables/cabbage/cabbage.component';
import { PumpkinComponent } from './practices/pages/vegetables/pumpkin/pumpkin.component';
import { LeafyComponent } from './practices/pages/vegetables/leafy/leafy.component';

// Management
import { ManagementComponent } from './management/management/management.component';
import { TableComponent } from './practices/shared/table/table.component';




@NgModule({
  imports: [
    CommonModule,
    PracticesRoutingModul,
    ShareComponentsModule,
    MaterialModule,
    LazyLoadModule,
  ],
  declarations: [
    AnchorToDirective,
    DialogComponent,
    PracticesComponent,
    IntroductionComponent,
    SideMenuComponent,
    ManagementComponent,
    TriticumComponent,
    HordeumComponent,
    AvenaComponent,
    SecaleComponent,
    ZeaComponent,
    RodentiaComponent,
    PhaseolusComponent,
    CicerComponent,
    GlycineComponent,
    LensComponent,
    MedicagoComponent,
    PisumComponent,
    ArachisComponent,
    BetaComponent,
    BrassicaComponent,
    GossypiumComponent,
    HelianthusComponent,
    NicotianaComponent,
    TableComponent,
    VegetablesComponent,
    PotatoesComponent,
    OnionComponent,
    CabbageComponent,
    PumpkinComponent,
    LeafyComponent,
  ],
  providers: [PracticesService],
  entryComponents: [SideMenuComponent, DialogComponent],
})
export class PracticesModule { }
