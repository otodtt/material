import { catchError } from 'rxjs/operators/catchError';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { Subscription } from 'rxjs/Subscription';

// import {of as observableOf} from 'rxjs/observable/of';
// import {merge} from 'rxjs/observable/merge';
// import {map} from 'rxjs/operators/map';
// import {startWith} from 'rxjs/operators/startWith';
// import {switchMap} from 'rxjs/operators/switchMap';


// import { Product } from '../../../shared/models/product.model';
import { Product } from '../../../shared/models/product.model';
import { ProductsService } from '../../../shared/services/products.service';

@Component({
    templateUrl: './acaricide-detail.component.html',
    styleUrls: ['./acaricide-detail.component.scss']
})
export class AcaricideDetailComponent implements OnInit, OnDestroy {

    product: Product;
    subscription: Subscription;

    isLoadingResults = true;
    isRateLimitReached = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private productsService: ProductsService
    ) {}

    ngOnInit() {
        const id = this.activatedRoute.snapshot.params['id'];

        this.subscription = this.productsService.findProductById('products/acaricides', id)
        .subscribe((product: Product) => {
            this.product = product;
            console.log(this.product);
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
          this.subscription.unsubscribe();
        }
    }

}
