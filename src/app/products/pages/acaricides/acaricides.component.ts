import {Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MediaMatcher } from '@angular/cdk/layout';
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {merge} from 'rxjs/observable/merge';
import {of as observableOf} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { MatDialog } from '@angular/material';
import { MoreInfoDialogComponent } from '../../shared/more-info-dialog/more-info-dialog.component';

import { ChangeBreadcrumbService } from '../../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../../common/services/SeoService';
import { ResizeService } from '../../../common/services/ResizeService';

import { Product } from '../../shared/models/product.model';
import { ProductsService } from '../../shared/services/products.service';


export class ExampleHttpDao {
    constructor(private productsService: ProductsService) { }

    getRepoIssues(sort: string, order: string): Observable<Product[]> {

        // console.log(`products/acaricides&sort=${sort}&order=${order}&page=${page + 1}`);
        console.log(`products/acaricides?sort=${sort}&order=${order}`);
        // return this.productsService.getProducts(`products/acaricides?sort=${sort}&order=${order}&page=${page + 1}`);
        return this.productsService.getProducts(`products/acaricides?sort=${sort}&order=${order}`);
    }
    disconnect() {}
}


@Component({
    selector: 'prz-acaricides',
    templateUrl: './acaricides.component.html',
    styleUrls: ['./acaricides.component.scss']
})

export class AcaricidesComponent implements OnInit, AfterViewInit, OnDestroy {
    private title = 'ПРЗ | Акарициди';
    private description =   'Акарициди. Продуки за растителна защита за борба срещу вредни акари (Жълт лозов акар,  Обикновен ' +
                            'паяжинообразуващ акар, Доматен акар, Лозова краста, Червен овощен акар и други). ';
    private keywords = 'акарициди, продуки, растителна, защита, култури, растителнозащитни, пракатики';

    breadcrumbName = 'Акарициди';

    mode = 'side';
    bigQuery: MediaQueryList;
    mediumQuery: MediaQueryList;
    smallQuery: MediaQueryList;

    private resizeSubscription: Subscription;
    private _mobileQueryListener: () => void;

    displayedColumns = ['name', 'substance', 'dose', 'category'];
    exampleDatabase: ExampleHttpDao | null;
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
        private http: HttpClient,
        public dialog: MatDialog,
        private resizeService: ResizeService,
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher,
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.bigQuery = media.matchMedia('(max-width: 850px)');
        this.bigQuery.addListener(this._mobileQueryListener);

        this.mediumQuery = media.matchMedia('(max-width: 768px)');
        this.mediumQuery.addListener(this._mobileQueryListener);

        this.smallQuery = media.matchMedia('(max-width: 481px)');
        this.smallQuery.addListener(this._mobileQueryListener);

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
        console.log(this.mode);
    }

    ngOnInit() {
        this.changeBreadcrumb.emitName(this.breadcrumbName);

        this.exampleDatabase = new ExampleHttpDao(this.productsService);

        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        merge(this.sort.sortChange, this.paginator.page)
        .pipe(
            startWith({}),
            switchMap(() => {
            this.isLoadingResults = true;
            return this.exampleDatabase.getRepoIssues(
                // this.sort.active, this.sort.direction, this.paginator.pageIndex);
                this.sort.active, this.sort.direction);
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
                // Catch if the GitHub API has reached its rate limit. Return empty data.
                this.isRateLimitReached = true;
                return observableOf([]);
            })
        ).subscribe(data => this.dataSource.data = data);
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
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
        console.log(this.mode);
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

    openDialog(name: any, info: any) {
        const dialogRef = this.dialog.open(MoreInfoDialogComponent, {
            data: { product: name, data: info},
            width: this.mode
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(this.mode);
        });
    }

    ngOnDestroy() {
        this.bigQuery.removeListener(this._mobileQueryListener);
        this.mediumQuery.removeListener(this._mobileQueryListener);
        this.smallQuery.removeListener(this._mobileQueryListener);
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
    }
}
