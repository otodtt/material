import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable';



import { BaseApi } from '../../../../common/core/base.api';

import { Practice } from '../models/practice.model';

@Injectable()

export class PracticesService extends BaseApi {

    constructor(public http: Http) {
        super(http);
    }

    // FOR LOCAL DB
    getPractices(param: string): Observable<Practice[]> {
        return this.get(param);
    }



    // addCategory(category: Practice): Observable<Practice> {
    //     return this.post('categories', category);
    // }

    // getCategories(): Observable<Practice[]> {
    //     return this.get('practices');
    // }

    // updateCategory(category: Practice): Observable<Practice> {
    //     return this.put(`practices/${category.id}`, category);
    // }

    // getCategoryById(id: number): Observable<Practice> {
    //     return this.get(`categories/${id}`);
    // }

    // getCategoryById(id: number): Observable<Practice> {
    //     return this.get(`/${id}`);
    // }
}

