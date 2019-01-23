import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PhasesModule } from './phases/phases.module';
import { PracticesModule } from './practices/practices.module';
import { ThresholdsModule } from './thresholds/thresholds.module';
import { ProductsModule } from './products/products.module';

import { HomeComponent } from './home/home.component';
import { CropsComponent } from './crops/crops.component';
import { DocumentsComponent } from './documents/documents.component';
import { FormulationsComponent } from './formulations/formulations.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'products', loadChildren: () => ProductsModule },
    { path: 'crops', component: CropsComponent },
    { path: 'practices', loadChildren: () => PracticesModule },
    { path: 'phases', loadChildren: () => PhasesModule },
    { path: 'thresholds', loadChildren: () => ThresholdsModule },
    { path: 'formulations', component: FormulationsComponent },
    { path: 'documents', component: DocumentsComponent },
    { path: 'contacts', component: ContactsComponent }
];


@NgModule({
    imports: [ RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    }) ],
    exports: [RouterModule]
})

export class AppRoutingModul {}
// { path: '**', component: NotFoundComponent }

// { path: 'practices', loadChildren: 'src/app/practices/practices.module#PracticesModule'},
// { path: 'phases', loadChildren: './phases/phases.module#PhasesModule'},
// { path: 'thresholds', loadChildren: 'src/app/thresholds/thresholds.module#ThresholdsModule'},
// { path: 'products', loadChildren: 'src/app/products/products.module#ProductsModule' },
