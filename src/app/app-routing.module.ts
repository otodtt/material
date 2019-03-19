import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DocumentsComponent } from './documents/documents.component';
import { FormulationsComponent } from './formulations/formulations.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'products', loadChildren: './products/products.module#ProductsModule' },
    { path: 'crops', loadChildren: './crops/crops.module#CropsModule' },
    { path: 'practices', loadChildren: './practices/practices.module#PracticesModule'},
    { path: 'phases', loadChildren: './phases/phases.module#PhasesModule'},
    { path: 'thresholds', loadChildren: './thresholds/thresholds.module#ThresholdsModule'},
    { path: 'registers', loadChildren: './registers/registers.module#RegistersModule'},
    { path: 'formulations', component: FormulationsComponent },
    { path: 'documents', component: DocumentsComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: '**', component: NotFoundComponent }
];


@NgModule({
    // imports: [ RouterModule.forRoot(routes, {
    //     preloadingStrategy: PreloadAllModules
    // }) ],
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})

export class AppRoutingModul {}
