import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CropsComponent } from './crops/crops.component';
import { DocumentsComponent } from './documents/documents.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'products', component: ProductsComponent },
    { path: 'crops', component: CropsComponent },
    { path: 'practices', loadChildren: './practices/practices.module#PracticesModule'},
    { path: 'thresholds', loadChildren: './thresholds/thresholds.module#ThresholdsModule'},
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
