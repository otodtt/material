import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
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

import { Product } from '../../shared/models/product.model';
import { ProductsService } from '../../shared/services/products.service';



@Component({
    selector: 'prz-acaricides',
    templateUrl: './acaricides.component.html',
    styleUrls: ['./acaricides.component.scss']
})

export class AcaricidesComponent implements OnInit, AfterViewInit {
    private title = 'ПРЗ | Акарициди';
    private description =   'Продуки за растителна защита (инсектици, фунгициди, хербициди, ' +
                            'акарициди и други). ';
    private keywords = 'продуки, растителна, защита, култури, растителнозащитни, пракатики';

    breadcrumbName = 'Акарициди';

    // isLoaded = false;
    // products: Product[] = [];
    // subscription: Subscription;

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
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
        // this.subscription = this.productsService.getProducts('products/acaricides')
        //   .subscribe((products: Product[]) => {
        //       this.products = products;
        //       this.dataSource = new MatTableDataSource(products);
        //   });
        console.log(this.dataSource);
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
                // console.log(data);
                // console.log(this.resultsLength);
                return data;
            }),
            catchError(() => {
                this.isLoadingResults = false;
                // Catch if the GitHub API has reached its rate limit. Return empty data.
                this.isRateLimitReached = true;
                return observableOf([]);
            })
        ).subscribe(data => this.dataSource.data = data);
        console.log(this.dataSource);
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Data source defaults to lowercase matches
        this.dataSource.filter = filterValue;
        console.log(this.dataSource);
    }

    openDialog(name: string, info: any) {
        this.dialog.open(MoreInfoDialogComponent, {
            position: {right: 'right'},
            data: { title: name, data: info},
            width: '40%'
        });
    }
}

export class ExampleHttpDao {
    constructor(private productsService: ProductsService) { }

    // getRepoIssues(sort: string, order: string, page: number): Observable<Product[]> {
    getRepoIssues(sort: string, order: string): Observable<Product[]> {
        // const href = 'https://api.github.com/search/issues';
        // const requestUrl =
            // `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;

        // return this.http.get<GithubApi>(requestUrl);
        // console.log(`products/acaricides&sort=${sort}&order=${order}&page=${page + 1}`);
        console.log(`products/acaricides?sort=${sort}&order=${order}`);
        // return this.productsService.getProducts(`products/acaricides?sort=${sort}&order=${order}&page=${page + 1}`);
        return this.productsService.getProducts(`products/acaricides?sort=${sort}&order=${order}`);
    }
    disconnect() {}
}
