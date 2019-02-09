import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

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
    private _jsonURL = 'assets/db/products/acaricide.json';

    product: Product;
    subscription: Subscription;

    step = 0;
    constructor(
        private changeBreadcrumb: ChangeBreadcrumbService,
        private seoService: SeoService,
        private productsService: ProductsService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private http: HttpClient
    ) {}

    ngOnInit() {
      const id = this.activatedRoute.snapshot.params['id'];

      this.subscription = this.productsService.getJSON(this._jsonURL).subscribe(data => {
        this.product = data.find((x: any) => +x.id === +id);

        if ( this.product === undefined) {
          this.router.navigate(['products/acaricides']);
        } else {
          this.seoService.addTitle('ПРЗ | ' + this.product.name + ' - ' + this.product.pesticide);
          this.seoService.setNoKeywordsMeta(this.product.pestDescription);
          this.changeBreadcrumb.emitName(this.product.name);
          console.log(this.product);
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
