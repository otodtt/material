import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription, Observable, merge } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {of as observableOf} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {map} from 'rxjs/operators';
import {startWith} from 'rxjs/operators';
import {switchMap} from 'rxjs/operators';

import {animate, state, style, transition, trigger} from '@angular/animations';

// import { MatDialog } from '@angular/material';
// import { DialogAdjuvantsComponent } from './dialog-adjuvants/dialog-adjuvants.component';

import { ChangeBreadcrumbService } from '../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../common/services/SeoService';
import { ResizeService } from '../../common/services/ResizeService';

import { Substance } from '../models/substance.model';
import { ProductsService } from '../shared/products.service';

export class TableFromDatabase {
  constructor(private productsService: ProductsService) { }
  getRepoIssues(): Observable<Substance[]> {
    return this.productsService.getSubstance(`registers/substances`);
  }
  disconnect() {}
}

@Component({
  templateUrl: './substances.component.html',
  styleUrls: ['./substances.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SubstancesComponent implements OnInit, AfterViewInit, OnDestroy {
  private title = 'ПРЗ | Активни Вещества';
  private description = 'Регистър на използваните активни вещества и разрешените за пускане на пазара и употреба ПРЗ в Република България';

  breadcrumbName = 'Активни Вещества';

  private _dbURL = 'registers/substances';

  mode = '';

  bigQuery: MediaQueryList;
  mediumQuery: MediaQueryList;
  smallQuery: MediaQueryList;

  private resizeSubscription: Subscription;
  private _mobileQueryListener: () => void;

  columnsToDisplay = ['name'];
  exampleDatabase: TableFromDatabase | null;
  dataSource = new MatTableDataSource();
  expandedElement: Substance | null;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
      private changeBreadcrumb: ChangeBreadcrumbService,
      private seoService: SeoService,
      private productsService: ProductsService,
      private http: HttpClient,
      // public dialog: MatDialog,
      private resizeService: ResizeService,
      changeDetectorRef: ChangeDetectorRef,
      media: MediaMatcher
  ) {
      this.seoService.addTitle(this.title);
      this.seoService.setNoKeywordsMeta(this.description);

      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.bigQuery = media.matchMedia('(max-width: 850px)');
      this.bigQuery.addListener(this._mobileQueryListener);

      this.mediumQuery = media.matchMedia('(max-width: 768px)');
      this.mediumQuery.addListener(this._mobileQueryListener);

      this.smallQuery = media.matchMedia('(max-width: 481px)');
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

  // openDialog(info: any) {
  //     const dialogRef = this.dialog.open( MoreDialogComponent, {
  //         data: { data: info },
  //         width: this.mode
  //     });
  // }

  ngOnDestroy() {
      this.bigQuery.removeListener(this._mobileQueryListener);
      this.mediumQuery.removeListener(this._mobileQueryListener);
      this.smallQuery.removeListener(this._mobileQueryListener);
      if (this.resizeSubscription) {
          this.resizeSubscription.unsubscribe();
      }
  }

}
