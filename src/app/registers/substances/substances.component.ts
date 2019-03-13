import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ChangeBreadcrumbService } from '../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../common/services/SeoService';

import { ProductsService } from '../shared/products.service';
import { Substance } from '../models/substance.model';

@Component({
  templateUrl: './substances.component.html',
  styleUrls: ['./substances.component.scss']
})
export class SubstancesComponent implements OnInit, OnDestroy {
  private title = 'ПРЗ | Активни Вещества';
  private description = 'Регистър на използваните активни вещества и разрешените за пускане на пазара и употреба ПРЗ в Република България';

  breadcrumbName = 'Активни Вещества';

  private _dbURL = 'registers/substances';
  step = 0;

  substances: Substance[] = [];
  subscription: Subscription;

  constructor(
    private changeBreadcrumb: ChangeBreadcrumbService,
    private seoService: SeoService,
    private productsService: ProductsService
  ) {
    this.seoService.addTitle(this.title);
    this.seoService.setNoKeywordsMeta(this.description);
  }

  ngOnInit() {
    this.changeBreadcrumb.emitName(this.breadcrumbName);

    this.subscription = this.productsService.getProducts(this._dbURL)
      .subscribe(( substances: Substance[]) => {
        this.substances = substances;
      });

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
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

}
