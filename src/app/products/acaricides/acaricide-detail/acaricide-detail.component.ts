import { catchError } from 'rxjs/operators/catchError';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ChangeBreadcrumbService } from '../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../common/services/SeoService';
// import { ResizeService } from '../../../../common/services/ResizeService';

import { Product } from '../../shared/models/product.model';
import { ProductsService } from '../../shared/services/products.service';

@Component({
    templateUrl: './acaricide-detail.component.html',
    styleUrls: ['./acaricide-detail.component.scss']
})
export class AcaricideDetailComponent implements OnInit, OnDestroy {

    private keywords = 'акарициди, продуки, растителна, защита, култури, растителнозащитни, пракатики';

    product: Product;
    subscription: Subscription;

    isLoadingResults = false;

    step = 0;

    constructor(
        private changeBreadcrumb: ChangeBreadcrumbService,
        private seoService: SeoService,
        private productsService: ProductsService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        const id = this.activatedRoute.snapshot.params['id'];

        this.subscription = this.productsService.findProductById('products/acaricides', id)
        .subscribe((product: Product) => {
            this.product = product[0];
            console.log(this.product);
            if (product[0].length === 0 || this.product[0] === 'undefined' ) {
                // this.router.navigate(['products/acaricides']);
                console.log(product[0].length);
            } else {
                this.seoService.addTitle('ПРЗ | ' + product[0].name + ' - ' + product[0].pesticide);
                this.seoService.setMeta(product[0].pestDescription, this.keywords);
                this.changeBreadcrumb.emitName(product[0].name);
                this.isLoadingResults = true;
                console.log(product);
                console.log(product[0].length);
            }
        });
    }

    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }

    ngOnDestroy() {
        if (this.subscription) {
          this.subscription.unsubscribe();
        }
    }

}
