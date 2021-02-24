import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { merge, Observable, of as observableOf, Subscription } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';


import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogSubstancesComponent } from './dialog-substances/dialog-substances.component';

import { ChangeBreadcrumbService } from '../../common/services/changeBreadcrumb.service';
import { ResizeService } from '../../common/services/ResizeService';
import { SeoService } from '../../common/services/SeoService';

import { Substance } from '../models/substance.model';
import { ProductsService } from '../shared/products.service';



export class TableFromDatabase {
    constructor(private productsService: ProductsService) { }
    getRepoIssues(): Observable<Substance[]> {
        return this.productsService.getSubstance(`registers/substances`);
    }
    disconnect() { }
}

@Component({
    templateUrl: './substances.component.html',
    styleUrls: ['./substances.component.scss'],
})
export class SubstancesComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    mode = '';
    bigQuery: MediaQueryList;
    mediumQuery: MediaQueryList;
    smallQuery: MediaQueryList;

    columnsToDisplay = ['name', 'products', 'moreDetails'];
    exampleDatabase: TableFromDatabase | null;
    dataSource = new MatTableDataSource();
    expandedElement: Substance | null;

    resultsLength = 0;
    isLoadingResults = true;
    isRateLimitReached = false;

    private title = 'ПРЗ | Активни Вещества';
    private description = 'Регистър на използваните активни вещества и разрешените за пускане ' +
        'на пазара и употреба ПРЗ в Република България';

    private breadcrumbName = 'Активни Вещества';

    private resizeSubscription: Subscription;
    private mobileQueryListener: () => void;

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
        this.seoService.setNoKeywordsMeta(this.description);

        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.bigQuery = media.matchMedia('(max-width: 850px)');
        this.bigQuery.addEventListener('change', this.mobileQueryListener);

        this.mediumQuery = media.matchMedia('(max-width: 768px)');
        this.mediumQuery.addEventListener('change', this.mobileQueryListener);

        this.smallQuery = media.matchMedia('(max-width: 481px)');
        this.smallQuery.addEventListener('change', this.mobileQueryListener);

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

    openDialog(info: any) {
        const dialogRef = this.dialog.open( DialogSubstancesComponent, {
            data: { data: info },
            width: this.mode
        });
    }

    ngOnDestroy() {
        this.bigQuery.removeEventListener('change', this.mobileQueryListener);
        this.mediumQuery.removeEventListener('change', this.mobileQueryListener);
        this.smallQuery.removeEventListener('change', this.mobileQueryListener);
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
    }

}
