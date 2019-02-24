import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

import { ChangeBreadcrumbService } from '../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../common/services/SeoService';
// import { ResizeService } from '../../../../common/services/ResizeService';

import { Product } from '../../shared/models/product.model';
import { ProductsService } from '../../shared/services/products.service';

@Component({
    // template: '<p>TEST</p>',
    templateUrl: './acaricide-detail.component.html',
    styleUrls: ['./acaricide-detail.component.scss']
})
export class AcaricideDetailComponent implements OnInit, OnDestroy {
    private _dbURL = 'products/acaricides';

    product: Product;
    subscription: Subscription;

    step = 0;
    constructor(
        private changeBreadcrumb: ChangeBreadcrumbService,
        private seoService: SeoService,
        private productsService: ProductsService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        // private http: HttpClient
    ) {}

    ngOnInit() {
      const id = this.activatedRoute.snapshot.params['id'];

        this.subscription = this.productsService.findProductById(this._dbURL, id)
        .subscribe((product: Product) => {
            this.product = product[0];
          console.log(product[0]);
            if (product[0] === undefined ) {
              // this.router.navigate(['products/acaricides']);
              // console.log(product[0]);
            } else {
                if (product[0].length === 0 || +product[0].id !== +id) {
                  this.router.navigate(['products/acaricides']);
                    // console.log(product[0].length + '-->' + +id);
                } else {
                    this.seoService.addTitle('ПРЗ | ' + product[0].name + ' - ' + product[0].pesticide);
                    this.seoService.setNoKeywordsMeta(product[0].pestDescription);
                    this.changeBreadcrumb.emitName(product[0].name);
                    // console.log('yes');
                }
            }
        });
    }

    // public getJSON(): Observable<any> {
    //   return this.http.get(this._jsonURL);
    // }

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
