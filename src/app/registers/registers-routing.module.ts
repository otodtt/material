import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistersComponent } from './registers.component';
import { ParallelComponent } from './parallel/parallel.component';

export const routes: Routes = [
    {
      path: '', component: RegistersComponent, children: [
        { path: '', redirectTo: '/firms', pathMatch: 'full' },
        { path: 'parallel-trade', component: ParallelComponent },
        // { path: 'acaricides', component: AcaricidesComponent },
        // { path: 'acaricides/:id', component: AcaricideDetailComponent },
        // { path: 'nematocides', component: NematocidesComponent },
        // { path: 'nematocides/:id', component: NematocideDetailComponent },
        // { path: 'rodenticides', component: RodentsComponent },
        // { path: 'limatsides', component: LimatsidesComponent },
        // { path: 'limatsides/:id', component: LimatsideDetailComponent },
        // { path: 'repellents', component: RepellentsComponent },
        // { path: 'pheromones', component: PheromonesComponent },
        // { path: 'pheromones/:id', component: PheromonesDetailComponent },
        // { path: 'desiccants', component: DesiccantsComponent },
        // { path: 'desiccants/:id', component: DesiccantsDetailComponent },
        // { path: 'regulators', component: RegulatorsComponent },
        // { path: 'regulators/:id', component: RegulatorDetailComponent },
        // { path: 'parallel-trade', component: ParallelComponent },
      ]
    }
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class RegistersRoutingModule { }
