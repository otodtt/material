import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



import { BaseApi } from '../../../common/core/base.api';

import { Product } from '../models/product.model';

@Injectable()

export class ProductsService extends BaseApi {

    constructor(public http: HttpClient) {
        super(http);
    }

    // FOR LOCAL DB
    // getProducts(param: string): Observable<Product[]> {
    //     return this.get(param);
    // }

    // findProductById(url: string, id: string): Observable<Product> {
    //     return this.getById(url, id);
    // }

     // READ FROM FILE
    getProducts(param: string): Observable<Product[]> {
      return this.http.get<any>(param);
    }

    public getJSON(jsonURL: string): Observable<any> {
      return this.http.get(jsonURL);
    }

    // findProductById(url: string, id: number): Observable<Product> {
    //   // return this.http.get<any>(url, id);
    // }

}

