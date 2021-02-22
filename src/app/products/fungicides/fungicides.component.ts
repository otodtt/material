import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription, Observable, merge } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { of as observableOf } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { startWith } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';

import { MatDialog } from '@angular/material';
import { MoreInfoDialogComponent } from '../shared/more-info-dialog/more-info-dialog.component';

import { ChangeBreadcrumbService } from '../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../common/services/SeoService';
import { ResizeService } from '../../common/services/ResizeService';

import { Product } from '../shared/models/product.model';
import { ProductsService } from '../shared/services/products.service';


export class TableFromDatabase {
  constructor(private productsService: ProductsService) { }
  getRepoIssues(): Observable<Product[]> {
      return this.productsService.getProducts(`products/fungicides`);
  }
  disconnect() { }
}


@Component({
  templateUrl: './fungicides.component.html',
  styleUrls: ['../shared/pages.scss', './fungicides.component.scss']
})
export class FungicidesComponent implements OnInit, AfterViewInit, OnDestroy {

  private title = 'ПРЗ | Фунгициди';
  private description = 'Фунгициди. Продукти за растителна защита, предназначени за борба с причинителите на болест по растенията,  ' +
    'както и за третиране на семена.';
  private keywords = 'фунгициди, продуки, растителна, защита, култури, растителнозащитни, пракатики';

  breadcrumbName = 'Фунгициди';

  mode = '';
  private link = 'products/fungicides';
  bigQuery: MediaQueryList;
  mediumQuery: MediaQueryList;
  smallQuery: MediaQueryList;

  private resizeSubscription: Subscription;
  private _mobileQueryListener: () => void;

  displayedColumns = ['name', 'substance', 'dose', 'category'];
  exampleDatabase: TableFromDatabase | null;
  dataSource = new MatTableDataSource();

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private changeBreadcrumb: ChangeBreadcrumbService,
    private seoService: SeoService,
    private productsService: ProductsService,
    public dialog: MatDialog,
    private resizeService: ResizeService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.seoService.addTitle(this.title);
    this.seoService.setMeta(this.description, this.keywords);

    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.bigQuery = media.matchMedia('(max-width: 850px)');
    // tslint:disable-next-line: deprecation
    this.bigQuery.addListener(this._mobileQueryListener);

    this.mediumQuery = media.matchMedia('(max-width: 768px)');
    // tslint:disable-next-line: deprecation
    this.mediumQuery.addListener(this._mobileQueryListener);

    this.smallQuery = media.matchMedia('(max-width: 481px)');
    // tslint:disable-next-line: deprecation
    this.smallQuery.addListener(this._mobileQueryListener);

    if (
      this.bigQuery.matches === false &&
      this.mediumQuery.matches === false &&
      this.smallQuery.matches === false
    ) {
      this.mode = '60%';
    }
    if (
      this.bigQuery.matches === true &&
      this.mediumQuery.matches === false &&
      this.smallQuery.matches === false
    ) {
      this.mode = '60%';
    }
    if (
      this.bigQuery.matches === true &&
      this.mediumQuery.matches === true &&
      this.smallQuery.matches === false
    ) {
      this.mode = '80%';
    }
    if (
      this.bigQuery.matches === true &&
      this.mediumQuery.matches === true &&
      this.smallQuery.matches === true
    ) {
      this.mode = '';
    }
  }

  ngOnInit() {
    this.changeBreadcrumb.emitName(this.breadcrumbName);
    this.exampleDatabase = new TableFromDatabase(this.productsService);

    merge()
    .pipe(
      startWith({}),
      switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase.getRepoIssues();
      }),
      map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.length;

          return data;
      }),
      catchError(() => {
          this.isLoadingResults = false;
          this.isRateLimitReached = true;
          return observableOf([]);
      })
    ).subscribe(data => this.dataSource.data = data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.resizeSubscription = this.resizeService.onResize$
      .subscribe(size => {
        if (size.innerWidth > 768) {
          this.mode = '60%';
        }
        if (size.innerWidth < 768) {
          this.mode = '80%';
        }
        if (size.innerWidth < 481) {
          this.mode = '';
        }
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openDialog(name: any, info: any) {
    const dialogRef = this.dialog.open(MoreInfoDialogComponent, {
      data: { product: name, data: info, link: this.link },
      width: this.mode
    });
  }

  ngOnDestroy() {
    // tslint:disable-next-line: deprecation
    this.bigQuery.removeListener(this._mobileQueryListener);
    // tslint:disable-next-line: deprecation
    this.mediumQuery.removeListener(this._mobileQueryListener);
    // tslint:disable-next-line: deprecation
    this.smallQuery.removeListener(this._mobileQueryListener);
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }

}