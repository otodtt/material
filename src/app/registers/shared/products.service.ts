import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



import { BaseApi } from '../../common/core/base.api';

import { Registers } from '../models/registers.model';
import { Substance } from '../models/substance.model';

@Injectable()

export class ProductsService extends BaseApi {

  constructor(public http: HttpClient) {
      super(http);
  }

  // FOR LOCAL DB
  getProducts(param: string): Observable<Registers[]> {
      return this.get(param);
  }

  getSubstance(param: string): Observable<Substance[]> {
    return this.get(param);
  }

  findProductById(url: string, id: string): Observable<Registers> {
      return this.getById(url, id);
  }

}

