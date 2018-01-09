import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated/';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable';



import { BaseApi } from '../../../../common/core/base.api';

import { Practice } from '../models/practice.model';

@Injectable()

export class PracticesService extends BaseApi {
    practice: FirebaseListObservable<any[]>;

    constructor(public http: Http, public af: AngularFireDatabase) {
        super(http);
        // this.practice = this.af.list('/clients') as FirebaseListObservable<Practice[]>;
        // this.practice = db.collection('items').valueChanges();
    }

    // FOR LOCAL DB
    // getPractices(param: string): Observable<Practice[]> {
    //     return this.get(param);
    // }

    // FOR FIREBASE
    getPractices(param: string): Observable<Practice[]> {
        return this.practice = this.af.list('/' + param) as FirebaseListObservable<Practice[]>;
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

