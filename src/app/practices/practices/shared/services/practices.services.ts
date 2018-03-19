import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



import { BaseApi } from '../../../../common/core/base.api';

import { Practice } from '../models/practice.model';

@Injectable()
export class PracticesService extends BaseApi {

    constructor(public http: HttpClient) {
        super(http);
    }

    // FOR LOCAL DB
    getPractices(param: string): Observable<Practice[]> {
        return this.get(param);
    }
}

