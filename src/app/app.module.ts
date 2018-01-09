import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database-deprecated/';
import { environment } from '../environments/environment';

// Router
import { AppRoutingModul } from './app-routing.module';

// Services
import { ChangeBreadcrumbService } from './common/services/changeBreadcrumb.service';
import { ResizeService } from './common/services/ResizeService';
import { SeoService } from './common/services/SeoService';

// Directives
// import { AnchorToDirective } from './common/directives/AnchorToDirective';

// Modules
import { MaterialModule } from './common/material/material.module';
import { ShareComponentsModule } from './common/share.components.module';
import { PracticesModule } from './practices/practices.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ScrollButtonComponent } from './shared/scroll-button/scroll-button.component';

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
        ScrollButtonComponent,
        HomeComponent,
        ProductsComponent,
        CropsComponent,
        DocumentsComponent,
        ContactsComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        HttpModule,
        BrowserAnimationsModule,
        ShareComponentsModule,
        AppRoutingModul,
        PracticesModule,
        AngularFireModule.initializeApp(environment.firebase),
    ],
    providers: [
        ChangeBreadcrumbService,
        ResizeService,
        SeoService,
        AngularFireDatabase
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
