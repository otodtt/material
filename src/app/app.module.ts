import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// Router
import { AppRoutingModul } from './app-routing.module';

// Services
import { ChangeBreadcrumbService } from './common/services/changeBreadcrumb.service';
import { ResizeService } from './common/services/ResizeService';

// Modules
import { MaterialModule } from './common/material/material.module';
import { ShareComponentsModule } from './common/share.components.module';
import { PracticesModule } from './practices/practices.module';

import { AppComponent } from './app.component';
// import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

// Pages
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CropsComponent } from './crops/crops.component';
import { DocumentsComponent } from './documents/documents.component';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        SideNavComponent,
        HomeComponent,
        ProductsComponent,
        CropsComponent,
        DocumentsComponent,
        ContactsComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
        ShareComponentsModule,
        AppRoutingModul,
        PracticesModule
    ],
    providers: [ChangeBreadcrumbService, ResizeService],
    bootstrap: [AppComponent]
})
export class AppModule { }
