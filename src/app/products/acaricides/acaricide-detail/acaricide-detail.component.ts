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
            if (product[0] === undefined ) {
              this.router.navigate(['acaricides/acaricides']);
                // console.log('udef');
            } else {
                if (product[0].length === 0 || +product[0].id !== +id) {
                  this.router.navigate(['acaricides/acaricides']);
                    // console.log('eleif');
                    // console.log(product[0].length + '-->' + +id);
                } else {
                    this.seoService.addTitle('ПРЗ | ' + product[0].name + ' - ' + product[0].pesticide);
                    this.seoService.setMeta(product[0].pestDescription, this.keywords);
                    this.changeBreadcrumb.emitName(product[0].name);
                    this.isLoadingResults = true;
                    // console.log('yes');
                }
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
